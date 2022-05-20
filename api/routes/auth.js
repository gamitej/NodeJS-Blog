const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  console.log(req.dody)

  // Whenever Using async func always use try & catch
  try {

    //const newUser = new User(req.body) -> when u want to send everything use req.body
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.keyValue);
  }
});

module.exports = router


// Login
router.post("/login",async(req,res)=>{
  try{
      const user = await User.findOne({username:req.body.username})
      if(!user) return res.status(400).json('Wrong Credentials')

      const validate = await User.findOne({password:req.body.password})
      if(!validate) return res.status(400).json('Wrong Credentials')

      res.status(200).json(user)
  }
  catch(err){
    res.status(500).json(err.message);
  }
})