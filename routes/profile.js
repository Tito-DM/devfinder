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
router.delete("/experience/:id", auth,profileController.removeExperience);
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

router.put(
  "/education",
  [
    auth,
    check("school", "school is required").not().isEmpty(),
    check("degree", "degree is required").not().isEmpty(),
    check("from", "from date is required").not().isEmpty(),
    check("fieldofstudy", "Field of Study is required").not().isEmpty(),
  ],
  profileController.education
);
router.delete("/education/:id", auth,profileController.removeEducation);
router.delete("/:id", auth, profileController.destroy);
router.get("/github/:username",profileController.githubProfile)

module.exports = router;
