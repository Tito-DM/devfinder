const router = require("express").Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

//Get all users
//acess public
router.post(
  "/",
  [
    check("name", "Name is reuired").not().isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],

  userController.registration
);

module.exports = router;
