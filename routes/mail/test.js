const { google } = require('googleapis');
const urlParse = require('url-parse');
const axios = require('axios');
const queryPArse = require('query-string');
const userModel = require('../../models/user');
const request = require('request');

const oauth2Client = new google.auth.OAuth2(
    "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
    "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",
    "http://localhost:3001/mail",
    true
);

const doRequest =(url) => {
    return new Promise(function (resolve, reject) {
        request(url, function (error, res, body) {
        if (!error && res.statusCode === 200) {
            resolve(body);
        } else {
            reject(error);
        }
        });
    });
}

const getMail = async (rst, tokens) => {
    console.log("hello")
    let ml = await getAsyncArray();
    console.log("mail : "+ml);
    return new Promise((resolve, reject) => {
        rst.messages.map(async (e,key) => {
            let opt = {
                method: "GET",
                headers: {
                    authorization: "Bearer " + tokens.tokens.access_token,
                },
                "Content-Type": "application/json",
                url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${e.id}`
            }
            try{
                let rest = await doRequest(opt);
                console.log(rest);
                ml.push(rest);
            }catch(e){
                reject(e);
            }
        });
        console.log("ml : "+ml);
        resolve(ml);
    })
}

let ml = [];

const test = async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryPArse.parse(queryURL.query).code;
    const email = "pratiksingh.thakur@sarvaha.com";
    const tokens = await oauth2Client.getToken(code);
    try{
        const opt1 = {
            method: "GET",
            headers: {
                authorization: "Bearer " + tokens.tokens.access_token,
            },
            "Content-Type": "application/json",
            url: `https://gmail.googleapis.com/gmail/v1/users/me/messages`
        }
        let rst1 = await doRequest(opt1);
        rst1 = JSON.parse(rst1);
        let ml = []

        for ( const i of rst1.messages ){
            let opt = {
                method: "GET",
                headers: {
                    authorization: "Bearer " + tokens.tokens.access_token,
                },
                "Content-Type": "application/json",
                url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${i.id}`
            }
            let rest1 =  JSON.parse(await doRequest(opt));
            
            ml.push({
                snippet: rest1.snippet,
                payload: rest1.payload
            });
        }
        res.send(ml);
    }
    catch(er1){
        res.send(er1);
    }
}

module.exports = test;