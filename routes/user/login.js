const { google } = require('googleapis');
const urlParse = require('url-parse');
const axios = require('axios');
const queryPArse = require('query-string');

const login = async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryPArse.parse(queryURL.query).code;
    const oauth2Client = new google.auth.OAuth2(
        "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
        "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",
        "http://localhost:3001/login",
        true
    );
    const tokens = await oauth2Client.getToken(code);
    res.send(tokens);
}

module.exports = login;