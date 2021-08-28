const mongoose = require("mongoose");

//connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected...")
    } catch (error) {
        console.error(error.message);
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;


