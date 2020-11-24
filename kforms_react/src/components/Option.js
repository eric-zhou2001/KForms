import React, { Component } from 'react';

class Option extends Component {
    state = { 
        question: this.props.id,
        content: this.props.content
     }
    render() { 
        return ( 
            <React.Fragment>
                <p><input type="radio" name={this.state.id} value={this.state.content}/>{this.state.content}</p> 
                <button>Delete This Option</button>
            </React.Fragment>
        );
    }
}
 
export default Option;