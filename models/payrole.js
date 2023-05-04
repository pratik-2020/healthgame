const mongoose = require('mongoose');

const payroleSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const payroleModel = mongoose.model('Payrole', payroleSchema);

module.exports = payroleModel;