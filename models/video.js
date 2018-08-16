const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  instructor: String,
  description: String,
  category: String,
  date: {
    type: Date,
    default: Date.now
  },
  tags: String,
  views: Number
});
const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
