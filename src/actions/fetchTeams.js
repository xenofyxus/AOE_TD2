import {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError, fetchUniqueUnitSuccess, fetchUnitError,
         fetchUnitByIDSuccess, fetchUnitPending} from './apiActions';
import axios from 'axios';

export function fetchTeams() {
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


export function fetchUniqueUnit(url) {
    const API_ENDPOINT = "https://us-central1-aoe-td2.cloudfunctions.net/API_PROXY?url=" + url
    console.log("MAKING API CALL")
    return dispatch => {
        dispatch(fetchUnitPending());
        axios.get(API_ENDPOINT)
        .then(res => {
            console.log("DISPATCHING FETCH UNIQUE UNIT SUCCESS")
            if(res.error) {
                console.log("THROWING ERROR")
                throw(res.error);
            };
            const data = JSON.stringify(res);
            const parsedRes = JSON.parse(JSON.stringify(res))
            return dispatch(fetchUniqueUnitSuccess(parsedRes.data));
        })
        .catch(error => {
            console.log("DISPATCHING ERROR")
            dispatch(fetchUnitError(error));
        })
    }
}

export function fetchUnitByID(unitID, number) {
    const API_ENDPOINT = "https://us-central1-aoe-td2.cloudfunctions.net/API_PROXY?unitID=" + unitID
    console.log("MAKING API CALL")
    return dispatch => {
        dispatch(fetchUnitPending());
        axios.get(API_ENDPOINT)
        .then(res => {
            console.log("DISPATCHING FETCH UNIQUE UNIT SUCCESS")
            if(res.error) {
                console.log("THROWING ERROR")
                throw(res.error);
            };
            console.log("RESULT: " + JSON.stringify(res))
            return dispatch(fetchUnitByIDSuccess(res.data, number));
        })
        .catch(error => {
            console.log("DISPATCHING ERROR")
            dispatch(fetchUnitError(error));
        })
    }
}