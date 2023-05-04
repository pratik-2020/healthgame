const contractModel = require('../../models/contract');

const getContract = (req, res) => {
    contractModel.find().then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getContract;