const router = require("express").Router();
const authController = require("../controllers/authController");

//Get all users
//acess public
router.get("/", authController.index);

module.exports = router;