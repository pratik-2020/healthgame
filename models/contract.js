const mongoose = require('mongoose');

const contractSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fileurl: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

const contractModel = mongoose.model('Contract', contractSchema);

module.exports = contractModel;