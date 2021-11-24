const express = require('express')
const morgan = require('morgan')

const todosRouter = require('./routes/todos')

const app = express()

todoData = [{label: 'Buy milk', done: false}, {label: 'Go to school', done: false}, {label: 'Watch movie', done: false}]

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/../public`))
app.use('/api/v1/todos', todosRouter)



module.exports = app