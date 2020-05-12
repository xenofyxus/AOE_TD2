export const FETCH_TEAMS_PENDING = 'FETCH_TEAMS_PENDING';
export const FETCH_UNIT_ERROR = 'FETCH_UNIT_ERROR';
export const FETCH_UNIT_PENDING = 'FETCH_UNIT_ERROR';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';
export const FETCH_UNIQUE_UNIT_SUCCESS = 'FETCH_UNIQUE_UNIT_SUCCESS';
export const FETCH_UNIT_BY_ID_SUCCESS = 'FETCH_UNIT_BY_ID_SUCCESS';

export function fetchTeamsPending() {
    return {
        type: FETCH_TEAMS_PENDING
    }
}

export function fetchTeamsSuccess(teams) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        teams: teams
    }
}

export function fetchTeamsError(error) {
    return {
        type: FETCH_TEAMS_ERROR,
        error: error.message
    }
}

export function fetchUnitPending() {
    return {
        type: FETCH_UNIT_PENDING
    }
}

export function fetchUnitByIDSuccess(unit) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        unit: unit
    }
}

export function fetchUniqueUnitSuccess(unit) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        unit: unit
    }
}

export function fetchUnitError(error) {
    return {
        type: FETCH_UNIT_ERROR,
        error: error.message
    }
}