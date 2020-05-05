import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import GamePresentation from '../../Presentational/GamePresentation';

class GameContainer extends Component {
        constructor(props) {
            super(props);
                
        }

        render() {
            return (
                    <GamePresentation/>
            )
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

const numDispatchToProps = (dispatch) => 
        ({setNum: x=>dispatch({type: 'SET_NO_GUESTS', numberOfGuests: x})});
const mapStateToProps = (state) => 
        ({mapComponents: generateGridSpace(state.game.mapSpace)});



export default connect(
         mapStateToProps, 
         numDispatchToProps)
(GamePresentation);