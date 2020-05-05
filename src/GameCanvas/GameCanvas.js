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
        this.drawGrids()
    }

    drawGrids(){
        for (let r = 0; r <= this.state.canvasSize.canvasHeight/this.state.gridSize; r++) {
            for (let q = 0; q <= this.state.canvasSize.canvasWidth/this.state.gridSize; q++) {
                let center = this.gridToPixel(this.Grid(q, r))
                this.drawGrid(this.canvasGrid, center)
            }
        }
    }

    drawGrid(canvasID, center){
        for(let i = 0; i < 4; i++){
            const start = this.getGridCornerCoord(center, i);
            const end = this.getGridCornerCoord(center, i+1);
            this.drawLine(canvasID, {x: start.x, y: start.y}, {x: end.x, y: end.y});
        }
    }

    getGridCornerCoord(center, i){
        const corner = i % 4;
        switch (corner) {
            case (0):
                return this.Point(center.x - this.state.gridSize/2, center.y - this.state.gridSize/2)
            case (1):
                return this.Point(center.x + this.state.gridSize/2, center.y - this.state.gridSize/2)
            case (2):
                return this.Point(center.x + this.state.gridSize/2, center.y + this.state.gridSize/2)                 
            case (3):
                return this.Point(center.x - this.state.gridSize/2, center.y + this.state.gridSize/2)
            default:
                break;
        }

    }

    gridToPixel(grid){
        const x = this.state.gridSize * (grid.q) + this.state.gridSize/2
        const y = this.state.gridSize * (grid.r) + this.state.gridSize/2
        return(this.Point(x,y))
    }

    Point(x, y) {
        return{x: x, y: y}
    }

    Grid(q, r){
        return {q: q, r: r}
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
