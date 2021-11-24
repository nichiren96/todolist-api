const express = require('express')
const todosController = require('../controllers/todos')

const router = express.Router()

router
    .route('/')
    .get(todosController.getAllTodos)
    .post(todosController.createTodo)


router
    .route('/:todoId')
    .get(todosController.getTodo)
    .patch(todosController.updateTodo)
    .delete(todosController.deleteTodo)


module.exports = router

 