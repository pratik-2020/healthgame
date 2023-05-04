const userModel = require('../../models/user');

const getAllUser = (req, res) => {
    userModel.find().then((resp) => {
        res.send(resp);
    }).catch((er) => {
        res.send(er);
    })
}

module.exports = getAllUser;