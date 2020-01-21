import React from 'react';
import {GAME_STATES} from './GameState';

export default function GameMessage (props) {
    let player = props.player === 0 ? 'O' : 'X';
    return (
        <div id="game-message">Current Move: {props.move} -- {
            (props.gameState === GAME_STATES.WIN) ? player + ' Won' :
                (props.gameState === GAME_STATES.DRAW) ? 'Game Tied' :
                    player +  '\'s Turn'
        }</div>
    );
}