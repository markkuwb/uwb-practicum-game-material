import React from 'react';
import GameTitle from './GameTitle';
import GameBoard from './GameBoard';
import GameMessage from './GameMessage';
import GameInterface from './GameInterface';
import {GAME_STATES} from './GameState';

export default class Game extends React.Component {


    constructor(props) {
        super(props);
        this.state = {gameState: GAME_STATES.TURN_X };
        this.handleGameState = this.handleGameState.bind(this);
    }

    handleGameState(gameState) {
    }

    render() {
        return (
            <div id="game">
                <GameTitle/>
                <GameBoard gameState={this.state.gameState} onGameState={this.handleGameState}/>
                <GameMessage gameState={this.state.gameState}/>
                <GameInterface/>
            </div>
        );
    }

}