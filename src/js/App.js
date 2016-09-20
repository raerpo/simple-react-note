/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
*/
import React, { Component } from 'react';
import uuid from 'uuid';

// Importing components
import Note from './components/note';
import NoteList from './components/note-list';
import Toolbar from './components/toolbar';

class App extends Component {

    constructor() {
        super();
        this.state = {
            noteList: [],
            activeNote: {id: null, note: ''}
        };
        this.writingNote = this.writingNote.bind(this);
        this.createNewNote = this.createNewNote.bind(this);
        this.selectNote = this.selectNote.bind(this);
    }

     writingNote (event) {
        const note = event.target.value;
        const newActiveNote = Object.assign(this.state.activeNote, {note});
        const newNoteList = this.state.noteList.map((item)=>{
            return item.id === newActiveNote.id ? newActiveNote : item
        });
        this.setState({
            noteList: newNoteList
        });
    }

    selectNote(element) {
        const selectedNoteId = element.target.getAttribute('data-note-id');
        this.setState({
            activeNote: this.state.noteList.find((note)=>{return note.id === selectedNoteId})
        });
    }

    createNewNote() {
        const newNoteId = uuid.v4();
        this.setState({
            noteList: this.state.noteList.concat({
                id: newNoteId,
                note: ''
            })
        });
    }

    render() {
        return (
            <div className="App">
                <Toolbar createNewNote={this.createNewNote} />
                <NoteList 
                    noteList={this.state.noteList} 
                    selectNote={this.selectNote}
                />
                <Note 
                    activeNote={this.state.activeNote} 
                    writingNote={this.writingNote} 
                />
            </div>
        );
    }
}

export default App;
