const Profile = require("../models/Profile");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  try {
    const profile = await Profile.find().populate("user", ["name", "avatar"]);
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const single_user = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findOne({ user: id }).populate("user", [
      "name",
      "avatar",
    ]);
    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const create = async (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }

  const {
    company,
    website,
    status,
    location,
    skills,
    bio,
    githunusername,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook,
  } = req.body;

  //build profile object
  const profileFileds = {};
  profileFileds.user = req.user.id;
  if (company) profileFileds.company = company;
  if (website) profileFileds.website = website;
  if (location) profileFileds.location = location;
  if (githunusername) profileFileds.githunusername = githunusername;
  if (bio) profileFileds.bio = bio;
  if (status) profileFileds.status = status;
  if (skills) {
    //convert skills into array separated by "," and eliminate whitespace
    profileFileds.skills = skills.split(",").map((skill) => skill.trim());
  }
  // build social obj
  profileFileds.social = {};
  if (youtube) profileFileds.social.youtube = youtube;
  if (website) profileFileds.social.twitter = twitter;
  if (location) profileFileds.social.facebook = facebook;
  if (bio) profileFileds.social.instagram = instagram;
  if (status) profileFileds.social.linkedin = linkedin;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //update profile
      profile = await Profile.findByIdAndUpdate(
        { user: req.user.id },
        { $set: profileFileds },
        {
          new: true,
        }
      );
      return res.json(profile);
    }

    //create
    profile = new Profile(profileFileds);
    await profile.save();
    res.json(profile);
  } catch (error) {
    coconsole.error(error.message);
    res.status(500).send("Server error");
  }
};

const show = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    ); // populate profile model with user field

    if (!profile) {
      res.status(400).json({ msg: "there is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    //remove profile
    await Profile.findOneAndRemove({user: id });
    //remove user
    await User.findOneAndRemove({_id: id});
    
    res.status(200).json("User was removed");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  index,
  create,
  show,
  destroy,
  single_user,
};
