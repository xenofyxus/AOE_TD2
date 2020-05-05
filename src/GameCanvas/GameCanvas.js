import React from 'react'
import '../styles/gameCanvas.css'
import {GameConstants} from '../GameEngine/GameConstants'
export default class GameCanvas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gridSize: GameConstants.SPRITE_SIZE
        }
    }
  
  
    componentWillMount(){
        this.setState({
            canvasSize: { canvasWidth: GameConstants.MAP_WIDTH,
                         canvasHeight: GameConstants.MAP_HEIGHT}
        })
    }
    componentDidMount(){
        const{ canvasWidth, canvasHeight } = this.state.canvasSize;
        this.canvasGrid.width = canvasWidth ;
        this.canvasGrid.height = canvasHeight; 
        this.drawGrid(this.canvasGrid, {x: 50, y: 50})
    }
    drawGrid(canvasID, center){
        for(let i = 0; i < 4; i++){
            const start = this.getGridCornerCoord(center, i);
            const end = this.getGridCornerCoord(center, i+1);
            console.log({start, end} )
            this.drawLine(canvasID, {x: start.x, y: start.y}, {x: end.x, y: end.y});
        }
    }

    getGridCornerCoord(center, i){
        const corner = i % 4;
        switch (corner) {
            case (0):
                return this.Point(center.x - this.state.gridSize/2, center.x - this.state.gridSize/2)
            case (1):
                return this.Point(center.x + this.state.gridSize/2, center.x - this.state.gridSize/2)
            case (2):
                return this.Point(center.x + this.state.gridSize/2, center.x + this.state.gridSize/2)                 
            case (3):
                return this.Point(center.x - this.state.gridSize/2, center.x + this.state.gridSize/2)
            default:
                break;
        }

    }

    Point(x, y) {
        return{x: x, y: y}
    }
    drawLine(canvasID, start, end) {
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    render () {
        return(
            <div>
                <canvas ref={canvasGrid => this.canvasGrid = canvasGrid}>
                
                </canvas>
            </div>

        )

    }

}
