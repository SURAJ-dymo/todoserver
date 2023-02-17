const Todo = require('../model/TodoSchema')


const addTodo = async (req, res) => {
    const todo = new Todo({
        data: req.body.data,
        createdAt: Date.now()
    });

    const savedTodo = await todo.save();
    console.log(savedTodo);
    res.status(201).json(savedTodo);
}

const getAllTodo = async (req, res) => {
    const all_Todo = await Todo.find({});
    res.status(201).json(all_Todo);
}
const togglTodo = async (req, res) => {


    const { id } = req.params;
    const todoref = await Todo.findById({ _id: id })
    console.log(todoref);
    const Todoo = await Todo.findOneAndUpdate(
        { _id: id },
        { done: !todoref.done }
    );
    console.log(Todoo)
    const saved = await Todoo.save();
    console.log(saved);

    res.status(201).json(Todoo);
}
const updateTodo = async (req, res) => {

    const { id } = req.params;
    console.log(req.params.id, req.body.data)
    await Todo.findOneAndUpdate(
        { _id: id },
        { data: req.body.data }
    );


    const savedTodo = await Todo.findById({ _id: id });

    res.status(201).json(savedTodo);
}
const deleteTodo = async (req, res) => {

    const { id } = req.params;

    const deleted=await Todo.findOneAndDelete({_id:id});
    res.status(201).json(deleted);
}
module.exports = {
    addTodo,
    getAllTodo,
    togglTodo,
    updateTodo,
    deleteTodo

}