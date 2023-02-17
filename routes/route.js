const express=require("express");
const { addTodo,getAllTodo ,togglTodo,updateTodo,deleteTodo} = require("../controller/controller");
const route=express.Router();

route.post("/todos",addTodo)
route.get("/alltodos",getAllTodo)
route.get("/todos/:id",togglTodo)
route.put("/todo_update/:id",updateTodo)
route.delete("/todo_del/:id",deleteTodo)


module.exports=route;