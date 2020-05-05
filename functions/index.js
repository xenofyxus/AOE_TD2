const functions = require('firebase-functions');
const axios = require('axios');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


function getTeams() {
    console.log("doing API call")
    return(new Promise((resolve, reject) =>
    axios.get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
    .then((response) => response.data)
    .then(data => {
        if(data.error) {
            throw(data.error);
        }
        const x = JSON.stringify(data);
        console.log("Result" + x);
        return resolve(data);
    })
    .catch(error => {
        const x = JSON.stringify(error);
        console.log("error" + x);
        reject(error)
    })))
}


/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.API_PROXY = functions.https.onRequest((req, res) => {

  res.set('Access-Control-Allow-Origin', '*');

  if(req.method === 'OPTIONS'){
    res.set('Access-Control-Allow-Origin', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    console.log("In options")
    res.status(204).send('');
  } else {
    console.log("in else")
    getTeams().then((teamData)=>
    {
        console.log("We are in the then")
        console.log(teamData)
        console.log("ASD")
        return res.status(200).send(teamData);
    }
    )
    .catch(error => {
        console.log("error" + error);
        return error;
    }
    )
  }
  return null;
})
