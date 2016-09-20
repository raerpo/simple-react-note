import React, { Component } from 'react';

import NoteListItem from './note-list-item';

class NoteList extends Component {
    render() {
        const noteListItems = this.props.noteList.map((item, index) => {
            return <NoteListItem 
                        key={`note-${index}`} 
                        note={item.note} 
                        dataNoteId={item.id} 
                        onClick={this.props.selectNote} 
                    />
        });
        return (
            <ul className="note-list">
                {noteListItems}
            </ul>
        );
    }
}

export default NoteList;