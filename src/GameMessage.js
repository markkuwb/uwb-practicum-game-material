import React from 'react';
import {GAME_STATES} from './GameState';

export default function GameMessage (props) {
    return (
        <div id="game-message">{
            (props.gameState === GAME_STATES.WIN) ? 'Game Over' :
                (props.gameState === GAME_STATES.DRAW) ? 'Game Tied' :
                    (props.gameState + ' Move')
        }</div>
    );
}