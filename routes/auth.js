var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");
var jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", register);
router.post("/login", passport.authenticate("local"), login);
router.get("/logout", logout);

module.exports = router;

function register(req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        return console.log(err);
      }
      passport.authenticate("local")(req, res, () => {
        let payload = { username: req.body.username };
        let token = jwt.sign(payload, process.env.TOKEN_SECRET);
        res.json({
          token
        });
      });
    }
  );
}

function login(req, res) {
  let payload = {
    username: req.user.username,
    id: req.user._id
  };
  let token = jwt.sign(payload, process.env.TOKEN_SECRET);
  res.json({ token });
}

function logout(req, res) {
  req.logout();
  res.json({ message: "successfully logged out" });
}
