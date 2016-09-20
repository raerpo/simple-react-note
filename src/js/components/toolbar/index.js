import React, { Component } from 'react';

class Toolbar extends Component {
    render() {
        return (
            <ul className="toolbar">
                <li className="toolbar__search-box">
                    <input type="text" />
                </li>
                <li className="toolbar__add-new-note">
                    <button onClick={this.props.createNewNote}>+</button>
                </li>
            </ul>
        )
    }
}

export default Toolbar;