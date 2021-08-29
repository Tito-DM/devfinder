const router = require("express").Router();
const profileController = require("../controllers/profileController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

router.post(
  "/",
  [
    auth,
    [
      check("status", "status is required").not().isEmpty(),
      check("skills", "skills is required").not().isEmpty(),
    ],
  ],
  profileController.create
);
router.get("/me", auth, profileController.show);
router.get("/", profileController.index);
router.get("/user/:id", profileController.single_user);
router.put(
  "/experience",
  [
    auth,
    check("title", "title is required").not().isEmpty(),
    check("company", "company is required").not().isEmpty(),
    check("from", "from date is required").not().isEmpty()
  ],
  profileController.exp
);
router.delete("/:id", auth, profileController.destroy);

module.exports = router;
