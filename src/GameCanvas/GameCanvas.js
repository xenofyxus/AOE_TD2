import React from 'react'
import '../styles/gameCanvas.css'
import {GameConstants} from '../GameEngine/GameConstants'
export default class GameCanvas extends React.Component{
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
    }
  
  
    componentWillMount(){
        this.setState({
            canvasSize: { canvasWidth: GameConstants.MAP_WIDTH,
                         canvasHeight: GameConstants.MAP_HEIGHT},
                         gridSize: GameConstants.SPRITE_SIZE
        })
    }
    componentDidMount(){
        const{ canvasWidth, canvasHeight } = this.state.canvasSize;
        this.canvasGrid.width = canvasWidth ;
        this.canvasGrid.height = canvasHeight; 
        this.canvasCoordinates.width = canvasWidth ;
        this.canvasCoordinates.height = canvasHeight; 
        this.getCanvasPosition(this.canvasCoordinates)
        this.drawGrids()
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.currentGrid !== this.state.currentGrid){
            const {q, r, x, y} = nextState.currentGrid;
            console.log(q,r,x,y)
            const {canvasWidth, canvasHeight} = this.state.canvasSize;
            const ctx = this.canvasCoordinates.getContext("2d");
            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            this.drawGrid(this.canvasCoordinates, this.Point(x,y), "lime", 3);
            return true;
        }
        return false;
    }
    drawGrids(){
            console.log(this.state.gridSize)
        for (let r = 0; r <= this.state.canvasSize.canvasHeight/this.state.gridSize; r++) {
            for (let q = 0; q <= this.state.canvasSize.canvasWidth/this.state.gridSize; q++) {
                let center = this.gridToPixel(this.Grid(q, r))
                this.drawGrid(this.canvasGrid, center)
                this.canvasGrid.getContext("2d").fillText(r, center.x+10, center.y);
                this.canvasGrid.getContext("2d").fillText(q, center.x-10, center.y);
            }
        }
    }

    drawGrid(canvasID, center, color="black", width=1){
        for(let i = 0; i < 4; i++){
            const start = this.getGridCornerCoord(center, i);
            const end = this.getGridCornerCoord(center, i+1);
            this.drawLine(canvasID, {x: start.x, y: start.y}, {x: end.x, y: end.y}, color, width);
        }
    }
    fillGrid(canvasID, center, color="teal"){
        const ctx = canvasID.getContext("2d");
        const topLeft = this.getGridCornerCoord(center, 0);
        ctx.fillStyle = color;
        ctx.fillRect(topLeft.x, topLeft.y, this.state.gridSize, this.state.gridSize)

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
    
    pixelToGrid(position){
        let q = Math.floor(position.x / (this.state.canvasSize.canvasWidth/(this.state.gridSize/2)));
        if(q < 0){q = 0}
        let r = Math.floor(position.y /(this.state.canvasSize.canvasHeight/(this.state.gridSize/4)));
        if(r < 0){r = 0}
        return(this.Grid(q, r))
    }

    Point(x, y) {
        return{x: x, y: y}
    }

    Grid(q, r){
        return {q: q, r: r}
    }

    drawLine(canvasID, start, end, color, width) {
        const ctx = canvasID.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
        ctx.closePath();
    }

    getCanvasPosition(canvasID){
        const rect = canvasID.getBoundingClientRect();
        this.setState({
            canvasPosition: {left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom}
        })
    }

    handleDragStart(e){
        console.log(e.target.textContent)
        this.setState({
            currentlyDraggedUnit: e.target.textContent
        })

    }
    handleMouseMove(e){
        e.preventDefault()
        const {left, right, top, bottom} = this.state.canvasPosition;
        const offsetX = e.pageX - left;
        const offsetY = e.pageY - top;
        const {q, r} = this.pixelToGrid({x: offsetX, y: offsetY});
        const {x, y} = this.gridToPixel(this.Grid(q, r));
        this.setState({currentGrid: {q, r, x, y}})
    }


    handleDrop(e)
    {
        const data = this.state.currentlyDraggedUnit;
        const {q, r, x, y} = this.state.currentGrid;
        this.fillGrid(this.canvasGrid, this.Point(x,y), "green");
        this.drawGrid(this.canvasGrid, this.Point(x,y), "black");
        const ctx = this.canvasGrid.getContext("2d");
        ctx.fillStyle="black";
        ctx.fillText(data, x-18, y);
    }
    render () {
        return(
            <div>
                <canvas ref={canvasGrid => this.canvasGrid = canvasGrid}></canvas>
                <canvas ref={canvasCoordinates => 
                        this.canvasCoordinates = canvasCoordinates}
                        onMouseMove = {this.handleMouseMove} 
                        onDragOver = {this.handleMouseMove}
                        onDrop = {this.handleDrop}
                >

                </canvas>
                <div className="unit-selector">
                    <div draggable="true" onDragStart={this.handleDragStart} className="unit">Unit 1</div>
                    <div draggable="true"  onDragStart={this.handleDragStart} className="unit"> Unit 2</div>
                    <div draggable="true"  onDragStart={this.handleDragStart} className="unit"> Unit 3</div>
                </div>
            </div>

        )

    }

}
