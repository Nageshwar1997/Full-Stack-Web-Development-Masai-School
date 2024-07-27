const MovieModel = require("../models/movie.model");

const deleteMovieController = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await MovieModel.findByIdAndDelete({ _id: id });

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete movie",
      error: error.message,
    });
  }
};

module.exports = deleteMovieController;