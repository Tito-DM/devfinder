const Post = require("../models/Post");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const index = (req, res) => {
  res.send("post route");
};

const create = async (req, res) => {
  const erros = validationResult(req);
  //check erros
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }

  try {
    //get user
    const user = await User.findById(req.user.id).select("-password");

    //create post object
    const newPost = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    //save to db
    const post = await new Post(newPost);

    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  index,
  create,
};
