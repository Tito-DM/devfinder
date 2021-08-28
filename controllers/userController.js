const { validationResult } = require("express-validator");
const registration = (req,res)=>{
    const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()})
    }
    res.send("User route")
}


module.exports = {
    registration
}