import React from 'react';
import {Loop, Stage, World, Sprite} from 'react-game-kit';
import {Player} from '../GameEngine/Player'
import GameCanvas from '../GameCanvas/GameCanvas'
const GamePresentation = (props) => (
    <GameCanvas props={props.gameConstants}/>
);

export default GamePresentation;