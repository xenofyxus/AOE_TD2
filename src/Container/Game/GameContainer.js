import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import {SELECT_TEAM, selectTeam} from '../../actions/gameActions';
import fetchTeams from '../../actions/fetchTeams';
import GamePresentation from '../../Presentational/GamePresentation';
import '../../styles/gameCanvas.css'
import {GameConstants} from '../../GameEngine/GameConstants'
import GameCanvas from '../../GameCanvas/GameCanvas';
class GameContainer extends Component {
        constructor(props) {
                super(props);
        }

        render() {
            return (<GameCanvas></GameCanvas>)
        }
    
    componentWillMount(){
        this.setState({
            canvasSize: { canvasWidth: GameConstants.MAP_WIDTH,
                         canvasHeight: GameConstants.MAP_HEIGHT},
                         gridSize: GameConstants.SPRITE_SIZE
        })
    }
}

function generateGridSpace (mapSpace){
        if (mapSpace === undefined){
                console.log("no team selected")
                return null
        }
        
        var mapComponents = new Array(20)
        for(var i = 0; i < mapSpace.length; i++) {
                mapComponents[i] = new Array(10);
        mapComponents[i] = mapSpace[i].map((val, idx) => (<div>P{i}:{idx}:{val}</div>))
        }
        return mapComponents;
}

const getUnit = (state) => 
        {
            if(state.game.selectedTeamID !== null){
                const civ = state.teams.teams[state.game.selectedTeamID]
                return (JSON.stringify(civ.unique_unit))
            }
            else{
                return "No team selected"
            }
        }

const mapDispatchToProps = dispatch => {
        dispatch(fetchTeams())
        return {selectedCivUpdate : (e) => {        
                if(e !== null){
                console.log(e.value)
                return(dispatch(selectTeam(e.value)))
                }
                else{
                return(dispatch(selectTeam(null)))
                }
        }}
        }

const mapStateToProps = (state) => 
        (
        {   
        mapComponents: generateGridSpace(state.game.mapSpace),
        selectorList : state.teams.selectorList,
        pending : state.teams.pending,
        teams : state.teams.teams,
        selectedCiv : state.game.selectedTeamID,
        uniqueUnit : getUnit(state),
        getUnit: getUnit,
        fetchTeam: fetchTeams,
        selectTeam: selectTeam
        }
        );



export default connect(
         mapStateToProps, 
         mapDispatchToProps)
(GameCanvas);
