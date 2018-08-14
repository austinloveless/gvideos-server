const express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  User = require("./models/user"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  videoRoutes = require("./routes/videos");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//passport configuration
app.use(
  require("express-session")({
    //used to encode and decode session
    secret: "gvideos are the best",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/videos", videoRoutes);

app.get("/secret", (req, res) => {
  res.render("secret.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
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
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/secret");
    });
  })(req, res, next);
});

// app.post("/login", (req, res) => {});

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT ", port);
});
