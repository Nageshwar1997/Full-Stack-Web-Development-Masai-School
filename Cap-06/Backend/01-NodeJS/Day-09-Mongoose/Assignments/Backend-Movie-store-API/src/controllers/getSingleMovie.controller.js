const MovieModel = require("../models/movie.model");

const getSingleMovieController = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById({ _id: id });
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie fetched successfully",
      error: false,
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get movie",
      error: error.message,
    });
  }
};

module.exports = getSingleMovieController;
