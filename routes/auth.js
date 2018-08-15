var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("authtoken", { session: false, optional: false }),
  login
);
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
        res.json({
          username: req.body.username
        });
      });
    }
  );
}

function login(req, res) {
  res.send(req.user);
}

function logout(req, res) {
  req.logout();
  res.json({ message: "successfully logged out" });
}
