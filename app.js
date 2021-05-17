const express = require("express");
const todoModel = require("./schema");
const db = require("./db");
const { error } = require("console");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get("/completed", (req, res) => {
  todoModel
    .find({ isCompleted: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todo = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });

  todo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.put("/update/todo", (req, res) => {
    todoModel
    .findOneAndUpdate({priority: 1}, {isCompleted:false})
    .then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        res.send(error)
    })
});

app.delete("/delete/todo", (req, res) => {
  todoModel
    .findOneAndDelete({ isCompleted: false })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
