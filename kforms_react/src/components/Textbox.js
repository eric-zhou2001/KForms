import React, { Component } from 'react';

class Textbox extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }
    
    render() { 
        return ( 
            <form>
                <label htmlFor={"textBox_" + this.state.id}>
                    fill in this later im lazy
                </label>
                <textarea 
                    type="text" 
                    id={"textBox_" + this.state.id}
                    name={"textBox_" + this.state.id}
                ></textarea>
            </form>
        );
    }
}
 
export default Textbox;