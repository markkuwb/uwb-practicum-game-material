import React from 'react';
import GameTitle from './GameTitle';
import GameCell from './GameCell';
import GameMessage from './GameMessage';
import GameInterface from './GameInterface';
import {GAME_STATES} from './GameState';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {board: [], player: 0, gameState: GAME_STATES.MOVE, move: 0};
        this.wins = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];
        this.handleCellChange = this.handleCellChange.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    handleCellChange(node) {
        let board = this.state.board;
        board[node] = this.state.player;
        let move = this.state.move + 1;
        this.setState({board: board, move: move});
        if (this.checkBoardWin()) {
            this.setState({gameState: GAME_STATES.WIN});
        }
        else if (this.state.move >= 8) {
            this.setState({gameState: GAME_STATES.DRAW});
        }
        else {
            let player = (this.state.player + 1) % 2;
            this.setState({player: player});
        }
    }

    checkBoardWin() {
        for (let i in this.wins) {
            if (this.checkRowWin(this.wins[i])) {
                return true;
            }
        }
        return false;
    }

    checkRowWin(condition) {
        return (this.state.board[condition[0]] >= 0) &&
            (this.state.board[condition[0]] === this.state.board[condition[1]]) &&
            (this.state.board[condition[1]] === this.state.board[condition[2]]);

    }


    resetGame() {
        this.setState({board: [-1,-1,-1,-1,-1,-1,-1,-1,-1], move: 0, gameState: GAME_STATES.MOVE});
    }

    componentDidMount() {
        this.resetGame();
    }

    render() {
        return (
            <div id="game">
                <GameTitle/>
                <div id="game-board">
                    {this.state.board.map((value,i) => {
                        return (
                            <GameCell gameState={this.state.gameState} key={i} node={i} value={value} onChange={this.handleCellChange}/>
                        );
                    })}
                </div>
                <GameMessage gameState={this.state.gameState} player={this.state.player} move={this.state.move}/>
                <GameInterface onNewGame={this.resetGame}/>
            </div>
        );
    }

}