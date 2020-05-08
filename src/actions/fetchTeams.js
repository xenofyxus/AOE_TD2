import {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError} from './apiActions';
import axios from 'axios';

function fetchTeams() {
    const API_ENDPOINT = "https://us-central1-aoe-td2.cloudfunctions.net/API_PROXY"
    console.log("MAKING API CALL")
    return dispatch => {
        dispatch(fetchTeamsPending());
        axios.get(API_ENDPOINT)
        .then(res => {
            console.log("DISPATCHING FETCH TEAMS SUCCESS")
            if(res.error) {
                console.log("THROWING ERROR")
                throw(res.error);
            };
            console.log("RESULT: " + JSON.stringify(res))
            return dispatch(fetchTeamsSuccess(res.data.civilizations));
        })
        .catch(error => {
            console.log("DISPATCHING ERROR")
            dispatch(fetchTeamsError(error));
        })
    }
}
function fetchUniqueUnit(url) {
    const API_ENDPOINT = "https://us-central1-aoe-td2.cloudfunctions.net/API_PROXY?url=" + url
    console.log("MAKING API CALL")
    return dispatch => {
        dispatch(fetchTeamsPending());
        axios.get(API_ENDPOINT)
        .then(res => {
            console.log("DISPATCHING FETCH UNIQUE UNIT SUCCESS")
            if(res.error) {
                console.log("THROWING ERROR")
                throw(res.error);
            };
            console.log("RESULT: " + JSON.stringify(res))
            return dispatch(fetchTeamsSuccess(res.data.civilizations));
        })
        .catch(error => {
            console.log("DISPATCHING ERROR")
            dispatch(fetchTeamsError(error));
        })
    }
}


export default fetchTeams;