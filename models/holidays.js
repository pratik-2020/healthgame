const mongoose = require('mongoose');

const holidaysSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    optional: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const holidayModel = mongoose.model('Holiday', holidaysSchema);

module.exports = holidayModel