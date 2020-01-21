import React from 'react';

export default class GameCell extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onChange(this.props.node);
    }

    render() {
        if (this.props.value == -1)
            return (
                <div class="game-cel" onClick={this.handleClick}>?</div>
            );
        else
            return (
                <div class="game-cel">
                    {
                        (this.props.value == 0)?
                            (<b>O</b>):
                            (<b>X</b>)
                    }
                </div>
            );
    }

}