import React from 'react';

// GameInterface - Encapsulates game buttons to control game implemented as React class component
export default class GameInterface extends React.Component {

    //render - Render component into HTML.
    render() {
        // Note that render HTML includes event handler to communicate from child to parent (Game)
        return (
            <div id="game-interface"><button id="newgame" onClick={this.props.onNewGame}>New Game</button></div>
        )
    }
}