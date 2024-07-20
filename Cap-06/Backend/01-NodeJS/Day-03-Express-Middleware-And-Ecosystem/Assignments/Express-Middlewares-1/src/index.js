const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080 || 4230;
const dbPath = path.join(__dirname, "./db.json");

const accessLogStream = fs.createWriteStream("./access.log", {
  flags: "a",
});

app.use(morgan("common", { stream: accessLogStream }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

try {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  users = data.users;
} catch (error) {
  console.log(error);
}

const saveData = () => {
  const newData = { users };

  fs.writeFileSync(dbPath, JSON.stringify(newData), "utf-8");
};

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/get-users", (req, res) => {
  res.status(200).send(users);
});

app.post("/add-user", (req, res) => {
  let newUser = {
    id: Math.floor(Math.random() * 1000),
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  saveData();
  res.status(201).send("User added successfully.");
});

app.put("/user/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  let updateUser = req.body;
  let found = false;
  users = users.map((user) => {
    if (user.id === userId) {
      found = true;
      return { ...user, ...updateUser };
    }
    return user;
  });
    
    if (!found) {
        res.status(404).send('User not found.');
    }
    saveData();
    res.status(201).send('User updated successfully.');
});

// app.delete("/user/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
/**

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send('User not found.');
    }
    res.status(200).json(user);
});


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    let found = false;
    users = users.map(user => {
        if (user.id === userId) {
            found = true;
            return { ...user, ...updateUser };
        }
        return user;
    });
    if (!found) {
        return res.status(404).send('User not found.');
    }
    saveData(); // Save updated data to db.json
    res.status(200).send('User updated successfully.');
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const initialLength = users.length;
    users = users.filter(user => user.id !== userId);
    if (users.length === initialLength) {
        return res.status(404).send('User not found.');
    }
    saveData(); // Save updated data to db.json
    res.status(200).send('User deleted successfully.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Access log is located at: ${path.join(__dirname, 'access.log')}`);
});

 */
