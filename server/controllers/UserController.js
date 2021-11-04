require("dotenv").config()
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports = {
  getUsers: async (req, res) => {
    try {
      const orders = await User.find();
      res.status(200).json({ success: true, orders });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)
      //validation
      if (!email || !password) {
        return res.status(400).json({ msg: "Enter all fields!" });
      }

      if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password needs to be at least 6 characters long!" });

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ msg: "User with email already exists!" });
      }

        const salt = await bcrypt.genSalt();
        const passHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        password: passHash,
        // password,
      });
      const savedUser = await newUser.save();

      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res
          .status(400)
          .json({ success: false, error: "Not all fields have been entered!" });
        return;
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        res
          .status(400)
          .json({ msg: "No account with this email has been registered!" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ msg: "Invalid credentials!" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      res.status(200).json({ success: true, email: email, token: token });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: "Unknown error (status 500)" });
    }
  },
};