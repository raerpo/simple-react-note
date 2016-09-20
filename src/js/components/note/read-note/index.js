import React, {Component} from 'react';

class ReadNote extends Component {
    createMarkup() {
        return {
            __html: this.props.dangerouslySetInnerHTML
        };
    }
    render() {
        return (
            <div className="note__reading" dangerouslySetInnerHTML={this.createMarkup()}></div>
        );
    }
}

export default ReadNote;
