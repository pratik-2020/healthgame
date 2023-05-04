const contractModel = require('../../models/contract');

const updateContract = (req, res) => {
    contractModel.updateOne({
        _id: JSON.parse(req.body)._id
    }, JSON.parse(req.body).data).then((resp1) => {
        res.send({
            'message': 'Contract updated'
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = updateContract;