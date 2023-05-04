const payroleModel = require('../../models/payrole');

const deletePayrole = (req, res) => {
    payroleModel.deleteOne({
        _id: JSON.parse(req.body)._id
    }).then((resp1) => {
        res.send({
            'message': 'Pay role deleted'
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = deletePayrole;