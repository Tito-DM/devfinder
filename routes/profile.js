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
router.put("/:id", auth, profileController.update);
router.delete("/:id", auth, profileController.destroy);

module.exports = router;
