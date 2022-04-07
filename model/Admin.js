//require mongoose
const mongoose=require("mongoose")

//Notre schema

const {Schema}=mongoose
const adminSchema=new Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        type:String,
    },
   
})

module.exports=Admin=mongoose.model("/admin",adminSchema)