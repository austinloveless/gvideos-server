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

router.get("/category/:category", (req, res) => {
  db.Video.find({ category: req.params.category })
    .then(function(foundVideo) {
      res.json(foundVideo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/instructor/:instructor", (req, res) => {
  db.Video.find({ instructor: req.params.instructor })
    .then(function(foundVideo) {
      res.json(foundVideo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
