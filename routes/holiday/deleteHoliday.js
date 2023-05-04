const holidayModel = require('../../models/holidays');

const deleteHoliday = (req, res) => {
    holidayModel.deleteMany({
        _id: JSON.parse(req.body)._id
    }).then((resp1) => {
        res.send({
            'message': 'Holiday deleted'
        })
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = deleteHoliday;