const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const index = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
  
    if (!user) {
      res.status(400).json({ erros: [{ msg: "invalid credentials" }] });
    }

    //comparar password
    const isMatch = await bcrypt.compare(password, user.password);
   
    if (!isMatch) {
      return res.status(400).json({ erros: [{ msg: "invalid credentials" }] });
    }
    //set payload for token
    const payload = {
      user: {
        id: user.id,
      },
    };

    //create token
    jwt.sign(
      payload,
      process.env.JWTSECRETKEY,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  index,
  login,
};
