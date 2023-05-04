const cloudinary = require('cloudinary').v2;
const contractModel = require('../../models/contract');


cloudinary.config({
    cloud_name: "dnhhoqki8",
    api_key: "718595217981748",
    api_secret: "ysR1P309Avqmun_boisN0rJsJ_I"
});

const changeContract = (req, res) => {
    cloudinary.uploader.upload(img.tempFilePath, (er, dt) => {
        if(er1){
            res.send(er1);
        }
        else{
            contractModel.updateOne({
                _id: JSON.parse(req.body)._id
            }, {
                fileurl: dt.url
            }).then((resp2) => {
                res.send({
                    'message': 'Contract data changed'
                });
            }).catch((er2) => {
                res.send(er2);
            })
        }
    })    
}

module.exports = changeContract;