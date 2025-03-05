const { response } = require('express');
const Todo = require('../models/userModel')

// getting all todo list data
exports.getTodo = (req, res) => {
    Todo.getAll((err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json(result)
    });
};

// getting todo list data based on id
exports.getTodoById = (req, res) => {
    Todo.getById(req.params.id, (err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        if(result.length === 0) res.status(404).json({message: "Task not found"});
        res.json(result[0])
    });
};

// creating new task
exports.createTodo = (req, res) => {
    Todo.create(req.body, (err, result)=>{
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ 
            message: "Task added", 
            id: result.insertId // Correct way to get the inserted ID
        });
    });
};

// updating existing task
exports.updateTodo = (req, res) => {
    Todo.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Task updated" });
    });
};

// deleting or removing existing task
exports.deleteTodo = (req, res) => {
    Todo.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted" });
    });
}


// module.exports = {
//     delete: this.deleteTodo
// }