const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();

app.get("/apptwo", async (req, res) => {
  axios
    .post("http://appone-srv:8000/hione")
    .then((e) => console.log(e.data))
    .catch((e) => console.log("err", e.message));

  res.status(200).send("hello from appTwo");
});

// axios
//   .get("http://appone-srv:8000/appone")
//   .then((e) => console.log(e.data))
//   .catch((e) => console.log("err", e.message));

app.post("/hi", (req, res) => {
  res.status(200).send("hello from appTwo");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then((e) => console.log("connected to database"))
  .catch((e) => console.log(e));

app.listen(9000, () => {
  console.log("server running on 9000..");
});
