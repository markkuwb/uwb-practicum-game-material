import React from 'react';

export default class GameInterface extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="game-interface"><button id="newgame">New Game</button></div>
        )
    }
}