const leaveModel = require('../../models/leaves');


const getLeaves = (req, res) => {
    leaveModel.find({
        email: JSON.parse(req.body).email
    }).then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getLeaves;