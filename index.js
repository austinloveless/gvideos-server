const express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  bodyParser = require("body-parser"),
  cors = require("cors"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user"),
  videoRoutes = require("./routes/videos"),
  authRoutes = require("./routes/auth");

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
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/videos", videoRoutes);
app.use("/auth", authRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT ", port);
});
