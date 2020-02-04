import React from 'react';
import {Button,Tooltip} from '@material-ui/core';

// GameInterface - Encapsulates game buttons to control game implemented as React class component
export default class GameInterface extends React.Component {

    //render - Render component into HTML.
    render() {
        // Note that render HTML includes event handler to communicate from child to parent (Game)
        return (
            <div id="game-interface">
                <Tooltip title={"Resets the game"}>
                <Button id="newgame" variant="contained" color="primary" onClick={this.props.onNewGame}>New Game</Button>
                </Tooltip>
            </div>
        )
    }
}