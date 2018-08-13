var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/videos");

router
  .route("/")
  .get(helpers.getVideos)
  .post(helpers.createVideo);

router
  .route("/:videoId")
  .get(helpers.getVideo)
  .put(helpers.updateVideo)
  .delete(helpers.deleteVideo);

module.exports = router;
