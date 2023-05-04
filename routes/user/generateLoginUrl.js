const { google } = require('googleapis');

const generateLoginUrl = (req, res) => {
    const email = "pratiksingh.thakur@sarvaha.com" ;//JSON.parse(req.body).email;
    const oauth2Client = new google.auth.OAuth2(
        "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
        "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",
        "http://localhost:3001/login"
    );
    const scopes = ["https://www.googleapis.com/auth/gmail.readonly"]
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackURL: req.body.callbackURL,
            userId: req.body.userid,
            em:email
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
        // console.log("code : - \n"+code);
    });
}

module.exports = generateLoginUrl;