const express = require("express");

//set express
const app = express();

//port configuration
const PORT = process.env.PORT || 5000;




//listenning
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})