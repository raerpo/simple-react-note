import React, {Component} from 'react';

class WriteNote extends Component {
    render() {
        return (
            <textarea
                onChange={this.props.writingNote} 
                defaultValue={this.props.note}>
            </textarea>
        );
    }
}

export default WriteNote;
