import {SELECT_TEAM, START_GAME, FETCH_UNIT} from '../actions/gameActions';
import { act } from 'react-dom/test-utils';

const initialState = {
    selectedTeamID : null,
    unitIDs: [1, 61, null],
    waveIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gameStarted : false
}

// REDUCER FOR TEAMS API CALL.
export function gameReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_TEAM: 
            console.log("REACHED HERE " + JSON.stringify(action))
            return {
                ...state,
                selectedTeamID: action.selectedTeamID,
                unitIDs : [state.unitIDs[0], state.unitIDs[1], action.selectedTeamID],
                gameStarted : true,
                unit1 : {unitID : state.unitIDs[0]
                        
                },
                unit2 : {unitID : state.unitIDs[1]
                        
                },
                unit3 :{unitID : state.unitIDs[2]
                        
                },
                mapSpace : initializeMap()
            }
        case FETCH_UNIT:
            return{
                ...state,
                unit3: action.uniqueUnitID
            }
        case START_GAME: 
            return{
                ...state,
                
            }
        default: 
            return state;
    }
}

function initializeMap(){
    var grid = new Array(20)
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(10);
        grid[i] = grid[i].map((val) => ({occupied : false})) // Here We decide what is supposed to be in each grid space.
    }
    
    return(grid)
}

