import React, { Component } from 'react';
import Textbox from "./components/Textbox";
import "./components/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            components: []
        }
    }

    addTextbox = (event) => {
        this.setState({
            counter: ++this.state.counter,
            components: this.state.components.concat(
                <Textbox id={this.state} />
            )
        });
    }

    render() {
        return (
        <div className={"App"}>
            {this.state.components}
            <div className="componentBtns">
                <button 
                    className="addCmptBtn addTextbox"
                    onClick={this.addTextbox}
                >
                    Add Textbox
                </button>
            </div>
        </div>)
    }
}

export default App;
