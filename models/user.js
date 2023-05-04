const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    attendence : {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;