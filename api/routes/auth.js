const router = require("express").Router();
const User = require("../models/User");

// Register

router.post("/register", async (req, res) => {
  // Whenever Using async func always use try & catch
  try {
    //const newUser = new User(req.body) -> when u want to send everything use req.body
    // else
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
