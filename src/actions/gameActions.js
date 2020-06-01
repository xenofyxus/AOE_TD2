import { fetchUniqueUnit } from "./fetchTeams";

export const SELECT_TEAM = 'SELECT_TEAM';
export const START_GAME = 'START_GAME';

export const selectTeamAndUpdate = (team, dispatch) => {  
    console.log(team)      
    if(team.uniqueUnitUrl){
        dispatch(selectTeam(team.value))
        return dispatch(fetchUniqueUnit(team.uniqueUnitUrl[0]))
    }
    else{
        return(dispatch(selectTeam(null)))
    }
}

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
