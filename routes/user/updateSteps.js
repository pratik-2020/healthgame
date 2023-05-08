const userModel = require('../../models/user');
const queryPArse = require('query-string');
const urlParse = require('url-parse');
const axios = require('axios');
const { google } = require('googleapis');
const updateSteps = async (req, res) => {
    const oauth2Client = new google.auth.OAuth2(
        "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
        "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",
        "http://localhost:3001/steps",
        true
    );
    const queryURL = new urlParse(req.url);
    const code = queryPArse.parse(queryURL.query).code;
    const email = JSON.parse(queryPArse.parse(queryURL.query).state).em;
    console.log(email);
    // const hdr = req.headers.token;
    const tokens = await oauth2Client.getToken(code);
    try{
        console.log(tokens.tokens.access_token)
        // const result = await axios({
        //     method: "POST",
        //     headers: {
        //         authorization: "Bearer " + tokens.tokens.access_token
        //     },
        //     "Content-Type": "application/json",
        //     url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
        //     data: {
        //         "aggregateBy": [{
        //             "dataTypeName": "com.google.heart_minutes",
        //         "dataSourceId":
        //             "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes"
        //         }],
        //         "bucketByTime": { "durationMillis": 864000 },
        //         "startTimeMillis": 1454284800000,
        //         "endTimeMillis": 1455062400000
        //     }
        // });
        // res.send(result);
        const crttim = new Date().getTime();
        console.log("crittm : "+ crttim+" ")//+parseInt(rep12.week_start_date))
        const result = await axios({
            method: "POST",
            headers: {
                authorization: "Bearer " + tokens.tokens.access_token,
            },
            "Content-Type": "application/json",
            url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
            data: {
                aggregateBy: [
                    {
                        dataTypeName: "com.google.heart_minutes",//"com.google.step_count.delta",
                        dataSourceId: "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes" //"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }
                ],
                bucketByTime: {
                    durationMillis: 864000000
                },
                startTimeMillis: crttim - (new Date().getDate() - parseInt(rep12.week_start_date))*24*60*60*1000,
                endTimeMillis: crttim,

            }
        })
        console.log(result.bucket);
    }
    catch(e){
        // console.log(e);
        res.send(e);
    }
}

module.exports = updateSteps;