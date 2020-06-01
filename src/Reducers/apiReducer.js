import {FETCH_TEAMS_PENDING, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR, 
    FETCH_UNIT_PENDING, FETCH_UNIT_BY_ID_SUCCESS, FETCH_UNIQUE_UNIT_SUCCESS, FETCH_UNIT_ERROR} from '../actions/apiActions';
import { FETCH_UNIT } from '../actions/gameActions';

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
                selectorList : action.teams.map(civ => 
                    (
                    {"value" : civ.id, 
                    "label" : civ.name,
                    "uniqueUnitUrl" : civ.unique_unit ? civ.unique_unit : null}
                    )
                    ),
                
                teams: action.teams
            }
        case FETCH_UNIT_PENDING:    
            return {
                ...state,
                pending: true
            }
        case FETCH_UNIT_BY_ID_SUCCESS:
            return{
                ...state,
                [action.number]: action.uniqueUnitID
            }
        case FETCH_UNIQUE_UNIT_SUCCESS:
            return{
                ...state,
                unit3: action.unit,
                pending: false,
            }
        case FETCH_UNIT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.data
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
