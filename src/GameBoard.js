import React, {Fragment} from 'react';
import GameCell from './GameCell';
import {GAME_STATES} from './GameState';

export default class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {board: [], player: 0};
        this.handleCellChange = this.handleCellChange.bind(this);
        this.wins = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];
    }

    resetBoard() {
        this.setState({board: [-1,-1,-1,-1,-1,-1,-1,-1,-1]});
    }

    componentDidMount() {
        this.resetBoard();
    }

    handleCellChange(node) {
        let board = this.state.board;
        board[node] = this.state.player;
        let player = (this.state.player + 1) % 2;
        this.setState({board: board, player: player});
    }

    checkBoardWin() {
        for (let i in this.wins) {
            if (this.checkRowWin(this.wins[i])) {
                alert('Win');
            }
        }
    }

    checkRowWin(condition) {
        return (this.state.board[condition[0]] >= 0) &&
                (this.state.board[condition[0]] === this.state.board[condition[1]]) &&
                (this.state.board[condition[1]] === this.state.board[condition[2]]);

    }

    render() {
        return (
          <div id="game-board">
              {this.state.board.map((value,i) => {
                 return (
                     <GameCell key={i} node={i} value={value} onChange={this.handleCellChange}/>
                 );
              })}
          </div>
        );
    }


}