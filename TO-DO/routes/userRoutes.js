const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { user_fname, user_lname, user_id, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      user_fname,
      user_lname,
      user_id,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { user_id, password } = req.body;

    const user = await User.findOne({ user_id });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.id }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found!" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", auth, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ user_id: req.params.id });
    if (!user) return res.status(404).json({ message: "User not found!" });

    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
