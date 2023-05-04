const holidayModel = require('../../models/holidays');

const addHoliday = (req, res) => {
    let holidaym = new holidayModel();
    holidaym.date = JSON.parse(req.body).date;
    holidaym.optional = JSON.parse(req.body).optional;
    holidaym.save().then((resp) => {
        res.send({
            'message': 'Holiday added'
        });
    }).catch((er) => {
        res.send(er);
    })
}

module.exports = addHoliday;