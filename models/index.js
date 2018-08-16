var mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASE_URL);

mongoose.Promise = Promise;

module.exports.Video = require("./video");
// module.exports.Profiles = require("./profiles");
