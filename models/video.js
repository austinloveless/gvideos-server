const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  videourl: String,
  instructor: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  }
});
const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
