const Todo = require('../models/todo')

exports.getAllTodos = async (req, res) => {

    try {
        const todos = await Todo.find()
        res.status(200).json({
            status: 'success',
            results: todos.length,
            data: {
                todos
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Todos not found'
        })
    }
   
}

exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Todo not found'
        })
    }
   
}

exports.createTodo = async (req, res) => {

    try {

        // const newTodo = newTodo({})
        // newTodo.save()
        const newTodo = await Todo.create(req.body)
        res.status(200).json({
            status: 'success',
            data: {
                todo: newTodo
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
   


}

exports.updateTodo = async (req, res) => {

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
        res.status(200).json({
            status: 'success',
            data: {
                todo: updatedTodo
            }
        })
    } catch (err) {
         res.status(404).json({
            status: 'fail',
            message: 'Todo not found'
        })
    }
}

exports.deleteTodo = async (req, res) => {
     try {
        await Todo.findByIdAndDelete(req.params.todoId)
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
         res.status(404).json({
            status: 'fail',
            message: 'Todo not found'
        })
    }
}