const Admin = require("../model/Admin")
const express=require("express")

const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")

//signup admin
exports.signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const foundAdmin=await User.findOne({email})
        if ((foundAdmin)){
            return  res.status(400).send({msg:"email should be unique"})
        }
        //hashage du mot de passe l'emplacement est obligatoire
        const saltRounds = 10
        const hashedPassword= await bcrypt.hash(password,saltRounds)
        const newAdmin=new Admin ({...req.body})
        newAdmin.password=hashedPassword
        await newAdmin.save()
        const token=jwt.sign({id:newAdmin._id},process.env.SECRET_KEY,{expiresIn:"2h"})
        return res.status(200).send({msg:"Signup OK",admin:newAdmin,token})
        
    } catch (error) {
        
       
            return  res.status(400).send({msg:"Signup KO"})
           

        
    }
}

//signin admin
//path:http://localhost:5000/api/admin/signin

//signin admin
exports.signin=async(req,res)=>{   
    try {
         const {email,password}=req.body
    const foundAdmin=await Admin.findOne({email})
    if ((!foundAdmin)){
       return  res.status(400).send({errors:[{msg:"Bad credentiel"}]})
   }
   const foundPassword= await bcrypt.compare(password,foundAdmin.password)
   if((!foundPassword)){
       return  res.status(400).send({errors:[{msg:"Bad credentiel"}]})

   }
   const token=jsonwebtoken.sign({id:foundAdmin._id},process.env.SECRET_KEY,{expiresIn:"5h",})
   return res.status(200).send({msg:"login OK",admin:foundAdmin,token })
        
    } catch (error) {
        return  res.status(400).send({msg:"login failed"})

    }    
     

}

   
//const token=jsonwebtoken.sign({id:foundAdmin._id},process.env.SECRET_KEY})
//return res.status(200).send({msg:"login OK",admin:foundAdmin,token })