//require mongoose
const mongoose=require("mongoose")

//Notre schema

const {Schema}=mongoose
const userSchema=new Schema({
    firstname:{
        required:true,
        type:String,
    },
    lastname:{
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
    dateofbirth:{
        required:true,
        type:String,
    },
    country:{
        required:true,
        type:String,
    },
    phone:{
        required:true,
        type:Number,
    },
   
})

module.exports=User=mongoose.model("/user",userSchema)