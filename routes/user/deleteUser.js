const userModel = require('../../models/user');

const deleteUser = (req, res) => {
    userModel.deleteOne({
        name: JSON.parse(req.body).name
    }).then((resp) => {
        res.send({
            'message': 'User deleted'
        });
    }).catch((er) => {
        res.send(er);
    });
}

module.exports = deleteUser;