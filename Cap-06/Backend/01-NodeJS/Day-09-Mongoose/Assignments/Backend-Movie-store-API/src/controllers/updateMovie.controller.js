const MovieModel = require("../models/movie.model");

const updateMovieController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, rating, description, releaseDate, genre } = req.body;

    if (
      title === "" ||
      rating === "" ||
      description === "" ||
      releaseDate === "" ||
      genre === ""
    ) {
      return res.status(400).json({
        success: false,
        error: true,
        message:
          "Can't update movie with empty fields either fill all the fields or remove empty fields",
      });
    }

    if (title && typeof title !== "string") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Title must be a string",
      });
    }

    if (rating) {
      if (typeof rating !== "number") {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Rating must be a number",
        });
      }
      if (rating > 10 || rating < 0) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Rating must be between 0 and 10",
        });
      }
    }

    if (description && typeof description !== "string") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Description must be a string",
      });
    }

    if (releaseDate) {
      if (typeof releaseDate !== "string") {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Release date must be a string",
        });
      }

      const parsedDate = new Date(releaseDate);

      if (parsedDate.toString() === "Invalid Date") {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Invalid date format",
        });
      }

      const [year, month, day] = [
        parsedDate.getFullYear(),
        parsedDate.getMonth() + 1,
        parsedDate.getDate(),
      ];
      const isValidDate =
        !isNaN(year) && month >= 1 && month <= 12 && day >= 1 && day <= 31;

      if (!isValidDate) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Invalid date format",
        });
      }
    }

    if (genre && typeof genre !== "string") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Genre must be a string",
      });
    }

    const movie = await MovieModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      error: false,
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update movie",
      error: error.message,
    });
  }
};

module.exports = updateMovieController;
