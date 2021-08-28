const router = require("express").Router();
const profileController = require("../controllers/profileController");

//Get all users
//acess public
router.get("/", profileController.index);

module.exports = router;
