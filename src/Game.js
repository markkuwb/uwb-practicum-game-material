import React from 'react';
import GameTitle from './GameTitle';
import GameCell from './GameCell';
import GameMessage from './GameMessage';
import GameInterface from './GameInterface';
import {GAME_STATES} from './GameState';

// Game - Drives the entire game. Implemented as React Class Component
export default class Game extends React.Component {

    // constructor - initializes new objcet
    constructor(props) {

        // Super enables proper processing of properties inherited React component
        super(props);

        // Initialize React component state
        this.state = {board: [], player: 0, gameState: GAME_STATES.MOVE, move: 0};

        // Defines the possible win conditions
        this.wins = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];

        // Binds event handlers on this object to be able to access this.state and this.props
        this.handleCellChange = this.handleCellChange.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    // handlerCellChange - function to allow communication from child (contained components to Game
    handleCellChange(node) {

        // Make a copy of original board and change the sell -- note there are others ways to do this
        let board = this.state.board;
        board[node] = this.state.player;

        // Prepare to update move
        let move = this.state.move + 1;

        // Change the state of the board
        this.setState({board: board, move: move});

        // Check for Winning conditions
        if (this.checkBoardWin()) {
            this.setState({gameState: GAME_STATES.WIN});
        }

        // Check for Draw Condition
        else if (this.state.move >= 8) {
            this.setState({gameState: GAME_STATES.DRAW});
        }

        // Change Player
        else {
            let player = (this.state.player + 1) % 2;
            this.setState({player: player});
        }
    }

    // checkBoardWin - checks for all possible winning conditions
    checkBoardWin() {
        for (let i in this.wins) {
            if (this.checkRowWin(this.wins[i])) {
                return true;
            }
        }
        return false;
    }

    // checkRowWin - checks for a win combination / layout
    checkRowWin(condition) {
        return (this.state.board[condition[0]] >= 0) &&
            (this.state.board[condition[0]] === this.state.board[condition[1]]) &&
            (this.state.board[condition[1]] === this.state.board[condition[2]]);

    }

    // resetGame - restarts game to starting conditions
    resetGame() {
        this.setState({board: [-1,-1,-1,-1,-1,-1,-1,-1,-1], move: 0, gameState: GAME_STATES.MOVE});
    }

    // componentDidMount - event handler in React that is called when this component is first connected to the web page
    componentDidMount() {
        this.resetGame();
    }

    // render - render the game - not that this use array map() function to create each game cell
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