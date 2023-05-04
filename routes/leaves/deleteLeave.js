const leaveModel = require('../../models/leaves');

const deleteLeave = (req, res) => {
    leaveModel.find({
        _id: JSON.parse(req.body)._id
    }).then((resp1) => {
        if(resp1.length === 0){
            res.send({
                'message': 'Request does not exists'
            })
        }
        else{
            if(resp1[0].status){
                res.send({
                    'message':'Request already approved'
                })
            }
            else{
                leaveModel.deleteOne({
                    _id: JSON.parse(req.body)._id
                }).then((resp2) => {
                    res.send({
                        'message': 'Request deleted'
                    })
                }).catch((er2) => {
                    res.send(er2);
                });
            }
        }
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = deleteLeave;