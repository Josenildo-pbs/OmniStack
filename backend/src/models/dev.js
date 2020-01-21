const mongoose = require("mongoose");
const PointSchema = require("./utilis/PointSchema");

const devSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});
module.exports = mongoose.model("Dev", devSchema);
