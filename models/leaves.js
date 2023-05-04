const mongoose = require('mongoose');

const leavesSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    }
});

const leavesModel = mongoose.model('Leaves', leavesSchema);

module.exports = leavesModel;