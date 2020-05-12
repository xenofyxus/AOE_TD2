const functions = require('firebase-functions');
const axios = require('axios');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


function getTeams(query) {
    console.log("doing API call")
    return(new Promise((resolve, reject) =>
    axios.get("https://age-of-empires-2-api.herokuapp.com/api/v1/"+query)
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

//GETS UNIT BY API URL ENDPOINT FOR THE UNIQUE UNIT
function getUniqueUnit(url) {
  console.log("doing API call")
  return(new Promise((resolve, reject) =>
  axios.get(url)
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

// GETS UNIT BY ID
function getUnit(unitID) {
  console.log("doing API call")
  return(new Promise((resolve, reject) =>
  axios.get("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + unitID)
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
  } else if(req.query.url !== undefined) {
    console.log("fetching unique unit")
    getUniqueUnit(req.query.url).then((unitData)=>
    {
        console.log(unitData)
        return res.status(200).send(unitData);
    }
    )
    .catch(error => {
        console.log("error" + error);
        return error;
    }
    )
  }
  else if(req.query.unitID !== undefined) {
    console.log("fetching unique unit")
    getUnit(req.query.unitID).then((unitData)=>
    {
        console.log(unitData)
        return res.status(200).send(unitData);
    }
    )
    .catch(error => {
        console.log("error" + error);
        return error;
    }
    )
  }
  else{
    getTeams("civilizations").then((teamData)=>
    {
        console.log(teamData)
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
