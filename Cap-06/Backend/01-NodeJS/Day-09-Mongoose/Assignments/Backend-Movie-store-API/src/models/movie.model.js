const mongoose = require("mongoose");
const MovieSchema = require("../schemas/movie.schema");

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;
