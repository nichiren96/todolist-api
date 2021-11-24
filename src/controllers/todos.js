const Todo = require('../models/todo')

exports.getAllTodos = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: todoData.length,
        data: {
            todos: todoData
        }
    })
}

exports.getTodo = (req, res) => {

}

exports.createTodo = async (req, res) => {

    // const newTodo = newTodo({})
    // newTodo.save()
    const newTodo = await Todo.create(req.body)
    res.status(200).json({
        status: 'success',
        data: {
            todo: newTodo
        }
    })


}

exports.updateTodo = (req, res) => {

}

exports.deleteTodo = (req, res) => {

}