var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/schema");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  res.send({ msg: "User Route is Active" });
});

router.post("/register", async (req, res) => {
  let { name, email, password } = req.body;

  let user = await UserModel.find({ email });

  if (user.length > 0) {
    res.send({ msg: "User already exist login please" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      let user = await UserModel.insertMany([
        { name, email, password: hash, cart: [], orders: [] },
      ]);
      res.send({ msg: "Registration successfull", user: user });
    });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await UserModel.find({ email });

  if (user.length == 0) {
    res.send({ msg: "Wrong Cridentils" });
  } else {
    bcrypt.compare(password, user[0].password, function (err, result) {
      if (result) {
        var token = jwt.sign({ foo: "bar" }, "hehe");
        res.send({ msg: "login success", token: token, user: user[0] });
      } else {
        res.send({ msg: "wrong Cridentials" });
      }
    });
  }
});

module.exports = router;
