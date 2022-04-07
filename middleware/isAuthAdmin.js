const Admin=require("../model/Admin")
const jwt=require("jsonwebtoken")


const isAuthAdmin=async(req,res,next)=>{
    try {
        const token=req.header("Authorization")
        if(!token){
            return res.status(401).send({errors:[{msg:"not authorized"}]})
        }
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const foundAdmin=await Admin.findOne({_id: decoded.id })
        if (!foundAdmin){
            return res.status(401).send({errors:[{msg:"not authorized"}]})
         }
         req.admin=foundAdmin
         next()

        
    } catch (error) {
        return res.status(401).send({errors:[{msg:"not authorized"}]})
    }
}
module.exports= isAuthAdmin 