const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const {check} = require("express-validator")

router.post("/",[auth, [check("text", "text is required").not().isEmpty()]] ,postController.create);

module.exports = router;