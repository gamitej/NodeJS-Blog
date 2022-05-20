const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{console.log("Connected To MongoDB Server ...")})
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("Welcome To My Blog!");
});

app.listen("5000", () => {
  console.log("Backend Is Up & Running ...");
});
