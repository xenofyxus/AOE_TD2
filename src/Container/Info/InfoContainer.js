import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getTeamsError, getTeams, getTeamsPending} from '../../Reducers/apiReducer';
import {SELECT_TEAM, selectTeam} from '../../actions/gameActions';
import InfoPresentation from '../../Presentational/InfoPresentation';
import fetchTeams from '../../actions/fetchTeams';
import { gameReducer } from '../../Reducers/currentGameReducer';


class InfoContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        fetchTeams();
    }
    render() {
       
        const {teams, error, pending} = this.props;
        return (
            <div>
                <InfoPresentation/>
            </div>
        )
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

const mapStateToProps = state => (
        {
            pending : state.teams.pending,
            teams : state.teams.teams,
            selectorList : state.teams.teams.map(civ => 
                (
                {"value" : civ.id, 
                "label" : civ.name}
                )
                ),
            selectedCiv : state.game.selectedTeamID,
            uniqueUnit : getUnit(state)
            
        }
    )

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPresentation);