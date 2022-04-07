const express=require("express")
const {signin, signup } = require("../controllers/admin")
const isAuthAdmin = require("../middleware/isAuthAdmin")
const { validation, loginValidation, registerValidation } = require("../middleware/validator")
const User = require("../model/User")
const Admin=require("../model/Admin")
const Don=require("../model/Don")

//express router
const router=express.Router()
//authentification for signup &&signin
router.post("/signup",registerValidation(),validation,signup)
router.post("/signin",loginValidation(),validation,signin)
router.get("/current",isAuthAdmin,(req,res)=>res.send(req.admin))



//Description: Get
//path:http://localhost:5000/api/admin/
router.get("/",async(req,res)=>{
    try {
        const donList=await Don.find()
        return res.status(200).send({msg:"Voilà notre liste", donList})

    } catch (error) {
        res.status(400).send({msg:"La liste n'a pas été téléchargée",error})
        
    }
}
)

//Get all users
//path:http://localhost:5000/api/admin/userlist

router.get("/userlist",async(req,res)=>{
    try {
        const userList=await User.find()
        return res.status(200).send({msg:"Voilà notre liste", userList})

    } catch (error) {
        res.status(400).send({msg:"La liste n'a pas été téléchargée",error})
        
    }
}
)

//Description: Get one
//path:http://localhost:5000/api/admin/:_id
//req.params
router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params
        const FoundDon=await Don.findOne({_id})
        return res.status(200).send({msg:"Don founded", FoundDon})
        
    } catch (error) {
        res.status(400).send({msg:"Don not founded",error})
    }

})

//Description: delete
//path:http://localhost:5000/api/admin/deluser/:_id
//req.params

router.delete("/deluser/:_id", async(req,res)=>{
    try {
        const {_id}=req.params
        const deletUser= await User.deleteOne({_id})
        return  res.status(200).send({msg:"user deleted OK", deletUser})
        
    } catch (error) {
        res.status(400).send({msg:"user deleted KO",error})
        
    }
})



module.exports=router;