const contractModel = require('../../models/contract');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dnhhoqki8",
    api_key: "718595217981748",
    api_secret: "ysR1P309Avqmun_boisN0rJsJ_I"
});

const addContract = (req, res) => {
    cloudinary.uploader.upload(img.tempFilePath, (er, dt) => {
        if(er){
            res.send(er);
        }
        else{
            let contm = new contractModel();
            contm.email = JSON.parse(req.body).email;
            contm.fileurl = dt.url;
            contm.status = JSON.parse(req.body).status
            contm.save().then((resp1) => {
                res.send({
                    'message': 'Contract added'
                });
            }).catch((er1) => {
                res.send(er1);
            })
        }
    })
}

module.exports = addContract;