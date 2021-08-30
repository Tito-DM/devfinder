const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

router.post(
  "/",
  [auth, [check("text", "text is required").not().isEmpty()]],
  postController.create
);
router.get("/", auth, postController.index);
router.get("/:id", auth, postController.show);
router.delete("/:id", auth, postController.destroy);

module.exports = router;
