var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  bodyParser = require("body-parser"),
  cors = require("cors");

var videoRoutes = require("./routes/videos");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/videos", videoRoutes);

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT ", port);
});
