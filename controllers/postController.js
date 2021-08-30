const Post = require("../models/Post");
const { validationResult } = require("express-validator");
const User = require("../models/User");

const index = async (req, res) => {
  try {
    const post = await Post.find().sort({ date: -1 }); //sort to most recent
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) res.status(404).json({ msg: "Post not found" });
    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "Post not found" });
    res.status(500).send("Server Error");
  }
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

const destroy = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) res.status(404).json({ msg: "Post not found" });
    //check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    await post.remove();

    res.json("post was deleted");
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "Post not found" });
    res.status(500).send("Server Error");
  }
};

module.exports = {
  show,
  index,
  create,
  destroy,
};
