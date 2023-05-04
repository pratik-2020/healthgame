const contractModel = require('../../models/contract');

const deleteContract = (req, res) => {
    contractModel.deleteOne({
        _id: JSON.parse(req.body)._id
    }).then((resp1) => {
        res.send({
            'message': 'Contract deleted'
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = deleteContract;