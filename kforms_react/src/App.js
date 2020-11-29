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

    delete() {
        var finishBtn = document.getElementById("finishBtn");
        var delBtn = document.getElementById("delBtn");
        // Why is display none  ""????

        // Set button visibilities.
        if (finishBtn.style.display === "" || finishBtn.style.display ==="none") {
            delBtn.style.display = "none";
            finishBtn.style.display = "block";
        }

        // Allow users to select delete.
        
        // First, display "x" on the component.
    }

    finishDel() {
        var finishBtn = document.getElementById("finishBtn");
        var delBtn = document.getElementById("delBtn");
        // Why is display none  "" when page is initialized?

        // Set button visibilities.
        if (delBtn.style.display === "none") {
            delBtn.style.display = "block";
            finishBtn.style.display = "none";
        }
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

                <button 
                    id="delBtn"
                    onClick={this.delete}
                >
                    Delete
                </button>

                <button 
                    id="finishBtn"
                    onClick={this.finishDel}
                >
                    Finish
                </button>
            </div>
        </div>
        )
    }
}

export default App;
