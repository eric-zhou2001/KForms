import React, { Component } from 'react';
import Option from './Option';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userQuestion: '',
            options: [
                { content: "Option 1"},
                { content: "blah"},
                { content: "pepperoni"}
            ]
            // options: ["Option 1", "blah", "pepperoni"]
        }
    }

    handleSubmit() {
        console.log('Submit button was pressed.');
    }

    handleSubmitQuestion = (event) => {
        event.preventDefault();
        console.log('Question was submitted.');
        console.log(event.target);
        this.setState({
            userQuestion: event.target.input
        })
    }

    handleUserQuestion = (event) => {
        this.setState({
            userQuestion: event.target.value
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.handleSubmitQuestion}> 
                    <input type="text" id="userQuestion" name="userQuestion" placeholder="Enter your question"/>
                    <button type="submit">Submit</button>
                </form>

                <form onSubmit={this.handleSubmit} name="UserForm">
                    <label>{this.state.userQuestion}</label>
                        {this.state.options.map(option =>
                            <Option id="sameQuestion" content={option.content}/>)}
                        <br/>
                        <button type="submit">Submit</button>
                </form>

            </React.Fragment>
            
         );
    }
}
 
export default MultipleChoice;