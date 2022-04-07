//importation mongoose
const mongoose=require("mongoose")



//La fonction de connexion

const connect=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("DataBase is connected successfully")
    } catch (error) {
        console.log("fail to connect")
    }
}
module.exports=connect