const express = require("express");
const movieRouter = express.Router();

const addMovieController = require("../controllers/addMovie.controller");
const getMoviesController = require("../controllers/getMovies.controller");
const getSingleMovieController = require("../controllers/getSingleMovie.controller");
const updateMovieController = require("../controllers/updateMovie.controller");
const deleteMovieController = require("../controllers/deleteMovie.controller");

movieRouter.post("/add-movie", addMovieController);
movieRouter.get("/get-movies", getMoviesController);
movieRouter.get("/get-movie/:id", getSingleMovieController);
movieRouter.patch("/update-movie/:id", updateMovieController);
movieRouter.delete("/delete-movie/:id", deleteMovieController);

module.exports = movieRouter;
