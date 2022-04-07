//require mongoose
const mongoose=require("mongoose")

//Notre schema

const {Schema}=mongoose
const donSchema=new Schema({
    name:{
        required:true,
        type:String,
    },
    description:{
        required:true,
        type:String,
    
    },
    datepublication:{
        required:true,
        type:String, 
    },
    idu: {
        required: true,
        type:String,
    },
    img:{
        required: true,
        type:String,

    },
    email:{
        required: true,
        type:String,

    }
   
})

module.exports=Don=mongoose.model("/don",donSchema)