const leaveModel = require('../../models/leaves');

const addLeave = (req, res) => {
    let leam = new leaveModel();
    leam.email = JSON.parse(req.body).email;
    leam.date = JSON.parse(req.body).date;
    leam.status = false;
    leam.save().then((resp) => {
        res.send({
            'message': 'Leave added'
        });
    }).catch((er1) => {
        res.send(er1);
    });
}


module.exports = addLeave;