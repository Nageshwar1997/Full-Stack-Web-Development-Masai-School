const express = require("express");
const usersRouter = require("./routes/users.route");
const todosRouter = require("./routes/todos.route");
const blogsRouter = require("./routes/blogs.route");
const loggerMiddleware = require("./middlewares/logger.middleware");
const validationMiddleware = require("./middlewares/validation.middleware");

const app = express();

app.use(express.json());

// Users
app.use("/users", [loggerMiddleware, validationMiddleware], usersRouter);

// Todos
app.use("/todos", todosRouter);

// Blogs
app.use("/blogs", blogsRouter);

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
