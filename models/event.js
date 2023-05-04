const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    evntType: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    users: {
        type: Array,
        required: true
    }
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;