const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth')

dotenv.config();

// To use json req 
app.use(express.json())

// Connect To MongoDB Server
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{console.log("Connected To MongoDB Server ...")})
  .catch((err) => console.log(err));

// authRoute - auth.js
app.use('/api/auth',authRoute)

app.use("/", (req, res) => {
  console.log("Welcome To My Blog!");
});

// Port Running
app.listen("5001", () => {
  console.log("Backend Is Up & Running ...");
});
