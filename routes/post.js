const router = require("express").Router();
const postController = require("../controllers/postController");

//Get all users
//acess public
router.get("/", postController.index);

module.exports = router;