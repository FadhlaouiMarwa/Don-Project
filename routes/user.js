const express=require("express")
const { signup, signin } = require("../controllers/user")
const isAuth = require("../middleware/isAuth")
const { registerValidation, validation, loginValidation } = require("../middleware/validator")
const User = require("../model/User")
const Don=require("../model/Don")
//express router
const router=express.Router()
//authentification for signup &&signin
router.post("/signup",registerValidation(),validation,signup)
router.post("/signin",loginValidation(),validation,signin)
router.get("/current",isAuth,(req,res)=>res.send(req.user))

// Description: Post
// path:http://localhost:5000/api/user/add
//req.body

router.post("/add",async(req,res)=>{
    try {
        const {name,description,datepublication,idu,img,email}=req.body
    const newDon=new Don({name,description,datepublication,idu,img,email})
    await newDon.save()
    return res.status(200).send({msg:"Don added", newDon})
        
    } catch (error) {
         res.status(400).send({msg:"canot add this don",error})
    }
}
)

//Description: Get
//path:http://localhost:5000/api/user/
router.get("/",async(req,res)=>{
    try {
        const donList=await Don.find()
        return res.status(200).send({msg:"Voilà notre liste", donList})

    } catch (error) {
        res.status(400).send({msg:"La liste n'a pas été téléchargée",error})
        
    }
}
)
//Description: Get one
//path:http://localhost:5000/api/user/:_id
//req.params
router.get("/:idu",async(req,res)=>{
    try {
        const {idu}=req.params
        const FoundDon=await Don.findOne({idu})
        return res.status(200).send({msg:"Don founded", FoundDon})
        
    } catch (error) {
        res.status(400).send({msg:"Don not founded",error})
    }

})
//Description: upDate
//path:http://localhost:5000/api/user/edit/:_id
//req.params $$ req.body
router.put("/edit/:_id",async(req,res)=>{
    try {
        const {_id}=req.params
        const {name,description,datepublication,idu,img,email}=req.body
        const EditDon= await Don.updateOne({_id},{$set:{...req.body}})
        return  res.status(200).send({msg:"Update OK", EditDon})
    } catch (error) {
        res.status(400).send({msg:"Update KO",error})

    }
})
//Description: upDate
//path:http://localhost:5000/api/user/editprofil/:_id
//req.params $$ req.body
router.put("/editprofil/:_id",async(req,res)=>{
    try {
        const {_id}=req.params
        const {firstname,lastname,dateofbirth,country,phone}=req.body
        const EditProfil= await User.updateOne({_id},{$set:{...req.body}})
        return  res.status(200).send({msg:"Update OK", EditProfil})
    } catch (error) {
        res.status(400).send({msg:"Update KO",error})

    }
})

//Description: delete
//path:http://localhost:5000/api/user/del/:_id
//req.params

router.delete("/del/:_id", async(req,res)=>{
    try {
        const {_id}=req.params
        const deletDon= await Don.deleteOne({_id})
        return  res.status(200).send({msg:"Don deleted OK", deletDon})
        
    } catch (error) {
        res.status(400).send({msg:"Don deleted KO",error})
        
    }
})





module.exports=router;


