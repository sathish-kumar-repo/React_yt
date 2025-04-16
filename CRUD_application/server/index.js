const express = require("express");
const users = require("./sample.json");
var cors = require("cors");
const fs = require("fs");

const app = express();
// set express.json() middleware for handle data (post data)
app.use(express.json());

const port = 8000;

// Solve corp error
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

//! Display All User
app.get("/users", (req, res) => {
  return res.json(users);
});

//! Delete User Detail
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);

  let filteredUsers = users.filter((user) => user.id !== id);

  fs.writeFile("./sample.json", JSON.stringify(filteredUsers), (err, data) => {
    return res.json(filteredUsers);
  });
});

//! Add User
app.post("/users", (req, res) => {
  let { name, age, city } = req.body;

  if (!name || !age || !city) {
    res.status(400).send({ message: "All Fields Required" });
  }

  let id = Date.now();
  users.push({ id, name, age, city });

  fs.writeFile("./sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User Detail added success" });
  });
});

//! Update User
app.patch("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let { name, age, city } = req.body;

  if (!name || !age || !city) {
    res.status(400).send({ message: "All Fields Required" });
  }

  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1, { ...req.body });

  fs.writeFile("./sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User Detail Updated success" });
  });
});
app.listen(port, (err) => {
  console.log(`App is running in port ${port}`);
});
