const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  videourl: String,
  instructor: String,
  date: {
    type: Date,
    default: Date.now
  },
  options: Array
});
const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
