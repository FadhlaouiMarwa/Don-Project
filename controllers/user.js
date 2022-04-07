
const User = require("../model/User")

//importation express
const express=require("express")
//importation express Router
const router=express.Router()

const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")
//signu up User
exports.signup=async(req,res)=>{
    try {
        const {firstname,lastname,email,password,dateofbirth,country,phone}=req.body
        const foundUser=await User.findOne({email})
        if ((foundUser)){
            return  res.status(400).send({msg:"email should be unique"})
        }
        //hashage du mot de passe l'emplacement est obligatoire
        const saltRounds = 10
        const hashedPassword= await bcrypt.hash(password,saltRounds)
        const newUser=new User ({...req.body})
        newUser.password=hashedPassword
        await newUser.save()
        const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:"2h"})
        return res.status(200).send({msg:"Signup OK",user:newUser,token})
        
    } catch (error) {
        
       
            return  res.status(400).send({msg:"Signup KO"})
           

        
    }
}


// Signin USER

exports.signin=async(req,res)=>{   
    try {
         const {email,password}=req.body
    const foundUser=await User.findOne({email})
    if ((!foundUser)){
       return  res.status(400).send({errors:[{msg:"Bad credentiel"}]})
   }
   const foundPassword= await bcrypt.compare(password,foundUser.password)
   if((!foundPassword)){
       return  res.status(400).send({errors:[{msg:"Bad credentiel"}]})

   }
   //cretaion of token
   const token=jsonwebtoken.sign({id:foundUser._id},process.env.SECRET_KEY)
   return res.status(200).send({msg:"login OK",user:foundUser,token})
        
    } catch (error) {
        return  res.status(400).send({msg:"login failed"})

    }    
     

}






