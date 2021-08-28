const Profile = require("../models/Profile")
const index = (req,res)=>{
    res.send("profile route")
}


module.exports = {
    index
}