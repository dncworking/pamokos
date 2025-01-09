const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

const todos = [];

let ID = 0;

//get all
const getAllList = (req, res) => {
  res.status(200).json({
    status: "success",
    List: todos,
  });
};
//post//push
const postList = (req, res) => {
  const { task } = req.body;
  const addNewTask = {
    id: ID++,
    task,
  };
  res.status(200).json({
    status: "success",
    List: todos,
  });
  todos.push(addNewTask);
};
//put
const putList = (req, res) => {
  const id = +req.params.id;
  const taskIndex = todos.findIndex((todos) => todos.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "Task not found.",
    });
  }
  const { task } = req.body;
  todos[taskIndex] = {
    ...todos[taskIndex],
    task,
  };

  res.status(200).json({
    status: "success",
    task: todos[taskIndex],
  });
};
//delete
const deleteList = (req, res) => {
  const id = +req.params.id;
  const taskIndex = todos.findIndex((todo) => todo.id === id); //find task index by id

  if (taskIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "Task not found.",
    });
  }

  //remove the task from the todos array
  todos.splice(taskIndex, 1);

  res.status(200).json({
    status: "success",
    message: `Task with id ${id} has been deleted.`,
  });
};

app.route("/api/v1/list").get(getAllList).post(postList);
app.route("/api/v1/list/:id").put(putList).delete(deleteList);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
