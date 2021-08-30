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

const likes = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if post was liked
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    //push from array
    post.likes.unshift({ user: req.user.id });
    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const unlike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if post was liked
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been like" });
    }

    //remove from array
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const comment = async (req, res) => {
  const erros = validationResult(req);
  //check erros
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  try {
    const user = await User.findById(req.user.id).select("-password");
    const post = await Post.findById(req.params.id);
    console.log(user.name);
    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    post.comments.unshift(newComment);

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const uncomment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    //check if comment exit

    if (!comment) return res.status(404).json({ msg: "comment does not exit" });

    if (!post) res.status(404).json({ msg: "Post not found" });

    //check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    //check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    const removeIndex = post.comments
      .map((commen) => commen.user.toString())
      .indexOf(req.user.id);

      post.comments.splice(removeIndex, 1)
   
    res.json(post.comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  comment,
  uncomment,
  unlike,
  likes,
  show,
  index,
  create,
  destroy,
};
