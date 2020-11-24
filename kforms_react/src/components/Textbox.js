import React, { Component } from 'react';

class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            content: ""
        }
    }

    /**
     * Basic event handler function that updates the content variable in the
     * state for easy access.
     * @param { SyntheticEvent } event - default Synthetic Event passed into
     * onChange function.
     */
    saveContent = (event) => {
        this.setState({
            id: this.state.id,
            content: event.target.value
        })
    }
    
    render = () => { 
        return (
            <form>
                <label htmlFor={"textBox_" + this.state.id}>
                    fill in this later im lazy
                </label>
                <textarea 
                    type="text" 
                    id={"textBox_" + this.state.id}
                    name={"textBox_" + this.state.id}
                    value={this.state.content}
                    onChange = {this.saveContent}
                ></textarea>
            </form>
        );
    }
}
 
export default Textbox;