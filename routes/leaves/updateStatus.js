const leaveModel = require('../../models/leaves');

const updateStatus = (req, res) => {
    leaveModel.updateOne({
        _id: JSON.parse(req.body)._id
    }, {
        status: JSON.parse(req.body).status
    }).then((resp1) => {
        res.send({
            'message' : 'Leave status updated'
        })
    }).catch((er1) => {
        res.send(er1);
    })
}

module.updateStatus = updateStatus;