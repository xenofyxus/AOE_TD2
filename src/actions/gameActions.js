export const SELECT_TEAM = 'SELECT_TEAM';
export const START_GAME = 'START_GAME';
export const FETCH_UNIT = 'FETCH_UNIT';

export function selectTeam(id) {
    return {
        type: SELECT_TEAM,
        selectedTeamID: id
    }
}
export function startGame(id) {
    return {
        type: START_GAME,
    }
}
export function getUniqueUnit(url){
    return{
        type: FETCH_UNIT,
        url: url
    }
}