export const SELECT_TEAM = 'SELECT_TEAM';
export const START_GAME = 'START_GAME';

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
