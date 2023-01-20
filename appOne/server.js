const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/appone", async (req, res) => {
  const users = await User.find();

  res.status(200).json({ msg: "allUsersList", users, length: users.length });
});

// axios
//   .get("http://apptwo-srv:9000/apptwo")
//   .then((e) => console.log(e.data))
//   .catch((e) => console.log(e.message));

app.post("/hione", async (req, res) => {
  const user = await User.create({ name: "one", email: "one@gmail.com" });
  const users = await User.find();

  res.status(200).json({ msg: "userCreated", len: users.length });
});

console.log(process.env.MONGO_URI, 'is mongo uri>>>')

mongoose
  .connect(process.env.MONGO_URI)
  .then((e) => console.log("connected to database"))
  .catch((e) => console.log(e));

app.listen(8000, () => {
  console.log("server running on 8000..");
});
