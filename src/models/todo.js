const mongoose = require('mongoose')

const todoSChema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'A todo must have a label']
    },
    done: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSChema)

module.exports = Todo