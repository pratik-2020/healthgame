const payroleModel = require('../../models/payrole');

const addPayrole = (req, res) => {
    let paym = new payroleModel();

    paym.email = JSON.parse(req.body).email
    paym.role = JSON.parse(req.body).role
    paym.amount = JSON.parse(req.body).amount

    paym.save().then((resp1) => {
        res.send({
            'message': 'Payrole added'
        })
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = addPayrole;