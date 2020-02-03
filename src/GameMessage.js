import React from 'react';
import {GAME_STATES} from './GameState';

// GameMessage - shows messages to users implemented as React function component
export default function GameMessage (props) {

    // determines player "name" (O or X)
    let player = props.player === 0 ? 'O' : 'X';

    // render the message - note uses conditional render logic fir types of message
    return (
        <div id="game-message">Current Move: {props.move} -- {
            (props.gameState === GAME_STATES.WIN) ? player + ' Won' :
                (props.gameState === GAME_STATES.DRAW) ? 'Game Tied' :
                    player +  '\'s Turn'
        }</div>
    );
}