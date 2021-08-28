const router = require("express").Router();
const userController = require("../controllers/userController");

//Get all users
//acess public
router.get("/", userController.index);

module.exports = router;
