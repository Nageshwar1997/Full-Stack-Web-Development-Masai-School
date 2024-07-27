const MovieModel = require("../models/movie.model");

const getMoviesController = async (req, res) => {
  try {
    const {
      q,
      title,
      rating,
      sortBy,
      sortOrder = "asc",
      page,
      limit,
    } = req.query;
    const query = {};

    if (q) {
      query.title = { $regex: q, $options: "i" };
    } else if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    if (rating) {
      query.rating = rating;
    }

    const sortQuery = {};
    if (sortBy) {
      sortQuery[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    const movies = await MovieModel.find(query)
      .sort(sortQuery)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully",
      error: false,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get movies",
      error: error.message,
    });
  }
};

module.exports = getMoviesController;
