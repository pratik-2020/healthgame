const { google, gmail_v1 } = require('googleapis');
const { gmail } = require('googleapis/build/src/apis/gmail');
const url = require('url');
const urlParse = require('url-parse');
const request = require('request');
const queryPArse = require('query-string');

const getAttendence = (req, res) => {
    // const email = JSON.parse(req.body).email;
    const oauth2Client = new google.auth.OAuth2(
        "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
        "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",
        "http://localhost:3001/mail"
    );
    //"https://www.googleapis.com/auth/fitness.activity.read profile email openid"
    const scopes = ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/fitness.activity.read profile email openid", "https://www.googleapis.com/auth/fitness.activity.read","https://www.googleapis.com/auth/fitness.activity.write"]
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackURL: req.body.callbackURL,
            userId: req.body.userid,
            em:req.body.email
        })
    });
    console.log("callback url : "+req.body.callbackURL+" ");
    // res.send(req.body.callbackURL);

    request(url, (err, response, body) => {
        console.log("error ", err);
        console.log("statusCode: ", response && response.statusCode);
        res.send({url});
        const queryURL = new urlParse(url);
        const code = queryPArse.parse(queryURL.query).client_id;
    })
}

module.exports = getAttendence;