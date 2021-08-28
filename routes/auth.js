const router = require("express").Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth")
//Get all users
//acess public
router.get("/", auth, authController.index);

module.exports = router;