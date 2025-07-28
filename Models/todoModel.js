const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    status: Boolean,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const TodoModel = model("todo",todoSchema);

module.exports = TodoModel;