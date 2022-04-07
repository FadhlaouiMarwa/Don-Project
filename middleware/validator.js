// creation  of registerValidation et loginValidation

const { validationResult, check } = require("express-validator")

exports.registerValidation=()=>[
    check ("name","name is required").notEmpty(),
    check ("email","Email must be valid").isEmail(),
    check ("password","Should be at leat 6 caracters").isLength({min:6})
]
exports.loginValidation=()=>[
    check ("email","Email must be valid").isEmail(),
    check ("password","Should be at leat 6 caracters").isLength({min:5})
]

//handling error

exports.validation=async(req,res,next)=>{
    const error=validationResult(req)
    if(!error.isEmpty){
        res.status(200).json({errors:error.array()})
    }
    next()
}