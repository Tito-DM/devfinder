const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const profileRoute = require("./routes/profile");
dotenv.config();

//set express
const app = express();

//init bodyParser
app.use(express.json({extended:false}))

//port configuration
const PORT = process.env.PORT || 5000;
//connect to DB
connectDB();

//import routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/profile", profileRoute);

//listenning
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
