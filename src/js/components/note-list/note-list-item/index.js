import React, { Component } from 'react';

class NoteListItem extends Component {
    render() {
        return (
            <li className="note-list__item" onClick={this.props.onClick} data-note-id={this.props.dataNoteId}>
                <h3>{this.props.note || 'Note´s title'}</h3>
                <p>preview de la nota</p>
            </li>
        );
    }
}

export default NoteListItem;