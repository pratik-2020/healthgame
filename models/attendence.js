const mongoose = require('mongoose');

const attendenceSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    days: {
        tpye: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    history: {
        type: Array,
        required: true
    }
});

const attendenceModel = mongoose.model('Attendence', attendenceSchema);

module.exports = attendenceModel;