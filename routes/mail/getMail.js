const { google } = require('googleapis');
const urlParse = require('url-parse');
const axios = require('axios');
const queryPArse = require('query-string');
const userModel = require('../../models/user');
const getMail = async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryPArse.parse(queryURL.query).code;
    const email = "pratiksingh.thakur@sarvaha.com";
    const oauth2Client = new google.auth.OAuth2(
        "235564294923-nbbgdf0acl3k3auris1i3uscucbslqhl.apps.googleusercontent.com",
        "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",
        "http://localhost:3001/mail",
        true
    );
    const mnt = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const tokens = await oauth2Client.getToken(code);
    // console.log("tokens : "+tokens.tokens.access_token);
    // console.log("email :- "+email);
    const result = await axios({
        method: "GET",
        headers: {
            authorization: "Bearer " + tokens.tokens.access_token,
        },
        "Content-Type": "application/json",
        url: `https://gmail.googleapis.com/gmail/v1/users/me/messages`
    });
    let mails = [];
    let usr = [];
    await result.data.messages.map(async (e,key) => {
        let reslt = await axios({
            method: "GET",
            headers: {
                authorization: "Bearer " + tokens.tokens.access_token,
            },
            "Content-Type": "application/json",
            url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${e.id}`
        })
        usr.push({
            snippet: reslt.data.snippet,
            hdr: reslt.data.payload.headers
        })
        console.log(usr);
    })
    console.log(usr);
    // await result.data.messages.map(async (e,key) => {
    //     const result1 = await axios({
    //         method: "GET",
    //         headers: {
    //             authorization: "Bearer " + tokens.tokens.access_token,
    //         },
    //         "Content-Type": "application/json",
    //         url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${e.id}`
    //     });
    //     // console.log(result1);
    //     // result1.data.map((ele, key12) => {

    //     // })
    //     await result1.data.payload.headers.map(async (e1,key) => {
    //         if(e1.name === 'Subject' && e1.value.toLowerCase().indexOf("transaction alert") !== -1){
    //             let f = {
    //                 sub: e1.value.toLowerCase(),
    //                 hdr: result1.data.payload.headers
    //             }
    //             await mails.push(f);
    //         }
    //     });
    //     let attend = {};
    //     const curMon = new Date().getMonth();
    //     const curYear = new Date().getFullYear();
    //     // console.log(curMon+" "+curYear);
    //     mails.map((e2, key1) => {
    //         e2.hdr.map((e3, key3) => {
    //             if((e3.name === 'Date' && (e3.value.split(' ')[2] !== mnt[curMon - 1] || e3.value.split(' ')[3] !== curYear)) ){
    //                 return;
    //             }
    //             if(e3.name === 'From'){
    //                 const em = e3.value
    //                 let feg = em.split('<');
    //                 feg = feg[1].split('>');
    //                 let em1 = feg[0];
    //                 if(em1 in attend){
    //                     attend[em1] = attend[em1] + 1
    //                 }
    //                 else{
    //                     attend[em1] = 1;
    //                 }
    //             }
    //         })
    //     });
    //     // console.log(attend);
    // });
    // await console.log(mails);
    res.send(mails);
}

module.exports = getMail;