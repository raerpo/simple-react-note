import React, {Component} from 'react';
import Marked from 'marked';

import ReadNote from './read-note';
import WriteNote from './write-note';

class Note extends Component {

    constructor() {
        super();
        this.state = {
            noteMode: 'read'
        };
    }

    toggleModeTo(newMode) {
        return newMode === 'read' ? 'read' : 'write';
    }

    render() {
        const toggleToWriteButton = (<button onClick={ () => {this.setState( {noteMode:this.toggleModeTo('write')} )} }>Writing mode</button>);
        const toggleToReadButton = (<button onClick={ () => {this.setState( {noteMode:this.toggleModeTo('read')} )} }>Reading mode</button>);
        return (
            <div className="note">
                <ul className="note__actions">
                    <li>
                        { this.state.noteMode === 'read' ? toggleToWriteButton : toggleToReadButton }
                    </li>
                </ul>
                <div className="note__workspace">
                    { this.state.noteMode === 'read' ? 
                    <ReadNote
                        dangerouslySetInnerHTML={ Marked(this.props.activeNote.note) } 
                    /> : 
                    <WriteNote
                        note={ this.props.activeNote.note }
                        writingNote={ this.props.writingNote }
                    /> }
                </div>
            </div>
        );
    }

}

export default Note;
