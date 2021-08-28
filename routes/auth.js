const router = require("express").Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");
//Get all users
//acess public
router.get("/", auth, authController.index);
router.post(
  "/login",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  authController.login
);

module.exports = router;
