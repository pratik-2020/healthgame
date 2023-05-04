const payroleModel = require('../../models/payrole');

const getPayrole = (req, res) => {
    payroleModel.find().then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getPayrole;