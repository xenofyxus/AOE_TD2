import React from 'react'
import '../styles/gameCanvas.css'
import {GameConstants} from '../GameEngine/GameConstants'
export default class GameCanvas extends React.Component{
    constructor(props) {
        super(props);
    }
  
  
    componentWillMount(){
        this.setState({
            canvasSize: { canvasWidth: GameConstants.MAP_WIDTH,
                         canvasHeight: GameConstants.MAP_HEIGHT}
        })
    }
    componentDidMount(){
        const{ canvasWidth, canvasHeight } = this.state.canvasSize;
        this.canvasHex.width = canvasWidth ;
        this.canvasHex.height = canvasHeight; 
    }

    render () {
        return(
            <div>
                <canvas ref={canvasHex => this.canvasHex = canvasHex}>
                
                </canvas>
            </div>

        )

    }

}