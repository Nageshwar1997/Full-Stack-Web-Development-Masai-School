const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// CRUD Operations

// GET --> Read
app.get("/students", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(data.students);
  } catch (error) {
    res.send("Something went wrong");
  }
});

// POST --> Create
app.post("/addTeacher", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.teachers.push({ ...req.body, id: Math.round(Math.random() * 1000) });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Teacher added successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

// PATCH ---> Update
app.patch("/updateStudent", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.students.forEach((student, index) => {
      if (student.name === "Santosh") {
        student.age = req.body.age;
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.send("Student updated successfully");
      }
    });
  } catch (error) {
    res.send("Something went wrong");
  }
});

// PUT --> Update
app.put("/updateStudent", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.students.forEach((student, index) => {
      if (student.name === "Santosh") {
        data.students[index] = {
          ...req.body,
          id: student.id,
        };
      }
    });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Student updated successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.delete("/deleteStudent", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let newUpdatedStudentsData = data.students.filter((student) => {
      return student.name !== "Madhav";
    });
    data.students = newUpdatedStudentsData;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Student Deleted successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
