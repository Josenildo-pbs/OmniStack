const mongoose = require("mongoose");
const pointSchema = require("./utilis/PointSchema");

const devSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  location: {
    type: pointSchema,
    index: "2dsphere"
  }
});
module.exports = mongoose.model("Dev", devSchema);
