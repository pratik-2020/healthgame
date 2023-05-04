const userModel = require('../../models/user');
const axios = require('axios');
const { google } = require('googleapis');
const updateSteps = async (req, res) => {
    const hdr = req.headers.token;
    const result = await axios({
        method: "POST",
        headers: {
            authorization: "Bearer " + hdr
        },
        "Content-Type": "application/json",
        url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
        data: {
            "aggregateBy": [{
                "dataTypeName": "com.google.heart_minutes",
              "dataSourceId":
                "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "bucketByTime": { "durationMillis": 86400000 },
            "startTimeMillis": 1454284800000,
            "endTimeMillis": 1455062400000
          }
    });
    console.log(result);
}

module.exports = updateSteps;