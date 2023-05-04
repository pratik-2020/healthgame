const userModel = require('../../models/user');

const addUser = (req, res) => {
    let userm = new userModel();
    userm.name = JSON.parse(req.body).name;
    userm.email = JSON.parse(req.body).email;
    userm.save().then((resp) => {
        res.send('User added');
    }).catch((er) => {
        res.send(er);
    })
}

module.exports = addUser;