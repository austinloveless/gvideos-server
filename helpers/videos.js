var db = require("../models");

exports.getVideos = function(req, res) {
  db.Video.find()
    .then(function(video) {
      res.json(video);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.createVideo = function(req, res) {
  db.Video.create(req.body)
    .then(function(newVideo) {
      res.status(201).json(newVideo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.getVideo = function(req, res) {
  db.Video.findById(req.params.videoId)
    .then(function(foundVideo) {
      res.json(foundVideo);
    })
    .catch(function(err) {
      res.send(err);
    });
};
exports.getCategory = function(req, res) {
  db.Video.findById(req.params.category)
    .then(function(foundVideo) {
      res.json(foundVideo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.updateVideo = function(req, res) {
  db.Video.findOneAndUpdate({ _id: req.params.videoId }, req.body, {
    new: true
  })
    .then(function(video) {
      res.json(video);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.deleteVideo = function(req, res) {
  db.Video.remove({ _id: req.params.videoId })
    .then(function() {
      res.json({ message: "We deleted it!" });
    })
    .catch(function(err) {
      res.send(err);
    });
};

module.exports = exports;
