const express = require('express')
const app = express()

todoData = [{label: 'Buy milk', done: false}, {label: 'Go to school', done: false}, {label: 'Watch movie', done: false}]

const getAllTodos = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: todoData.length,
        data: {
            todos: todoData
        }
    })
}

const getTodo = (req, res) => {

}

const createTodo = (req, res) => {

}

const updateTodo = (req, res) => {

}

const deleteTodo = (req, res) => {

}


app
    .route('/api/v1/todos')
    .get(getAllTodos)
    .post(createTodo)


app
    .route('/api/v1/todos/:todoId')
    .get(getTodo)
    .patch(updateTodo)
    .delete(deleteTodo)

 

module.exports = app