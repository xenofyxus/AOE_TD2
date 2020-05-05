export const FETCH_TEAMS_PENDING = 'FETCH_TEAMS_PENDING';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';

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