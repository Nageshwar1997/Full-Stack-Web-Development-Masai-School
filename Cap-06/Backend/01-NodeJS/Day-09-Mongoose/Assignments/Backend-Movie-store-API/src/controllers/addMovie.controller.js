const MovieModel = require("../models/movie.model");

const addMovieController = async (req, res) => {
  try {
    const { title, rating, description, releaseDate, genre } = req.body;

    if (!title || !rating || !description || !releaseDate || !genre) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "All fields are required",
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

    const existingMovie = await MovieModel.findOne({ title });
    if (existingMovie) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Movie already exists",
      });
    }

    const movie = new MovieModel(req.body);
    await movie.save();

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add movie",
      error: error.message,
    });
  }
};

module.exports = addMovieController;
