import {FETCH_TEAMS_PENDING, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR} from '../actions/apiActions';

const initialState = {
    pending: false,
    teams: [],
    error: null
}

// REDUCER FOR TEAMS API CALL.
export function teamsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TEAMS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                pending: false,
                teams: action.teams
            }
        case FETCH_TEAMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.data
            }
        default: 
            return state;
    }
}

export const getTeams = state => state.teams;
export const getTeamsPending = state => state.pending;
export const getTeamsError = state => state.error;
