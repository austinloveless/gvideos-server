var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://austin:austin5171@ds119702.mlab.com:19702/gvideos");

mongoose.Promise = Promise;

module.exports.Video = require("./video");
// module.exports.Profiles = require("./profiles");
