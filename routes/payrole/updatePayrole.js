const payroleModel = require('../../models/payrole');

const updatePayrole = (req, res) => {
    payroleModel.find({
        _id: JSON.parse(req.body)._id
    }).then((resp1) => {
        if(resp1.length === 0){
            res.send({
                'message': 'Payrole does not exist'
            })
        }
        else{
            payroleModel.updateOne({
                _id: JSON.parse(req.body)._id
            }, JSON.parse(req.body).data).then((resp2) => {
                res.send({
                    'message': 'Pay role updated'
                });
            }).catch((er2) => {
                res.send(er2);
            });
        }
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = updatePayrole;