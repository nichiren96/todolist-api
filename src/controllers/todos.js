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

exports.createTodo = (req, res) => {

}

exports.updateTodo = (req, res) => {

}

exports.deleteTodo = (req, res) => {

}