import React, { Component } from 'react';
import Textbox from "./components/Textbox";
import "./components/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            components: [],
            showDel: false
        }
    }

    addTextbox = (event) => {
        this.setState({
            counter: ++this.state.counter,
            components: this.state.components.concat(
                {
                    id: this.state.counter
                }
            )
        });
    }

    delete = () => {
        var finishBtn = document.getElementById("finishBtn");
        var delBtn = document.getElementById("delBtn");

        // Set button visibilities.
        if (finishBtn.style.display === "" || finishBtn.style.display ==="none") {
            delBtn.style.display = "none";
            finishBtn.style.display = "block";
        }

        // Allow users to select delete.
        
        // First, display "x" on the component. We update state first, which is then passed down
        // to the children.
        this.setState({
            showDel: true
        })
    }

    finishDel = () => {
        var finishBtn = document.getElementById("finishBtn");
        var delBtn = document.getElementById("delBtn");
        // Why is display none  "" when page is initialized?

        // Set button visibilities.
        if (delBtn.style.display === "none") {
            delBtn.style.display = "block";
            finishBtn.style.display = "none";
        }

        this.setState({
            showDel:false,
        })
    }

    render() {
        return (
        <div className={"App"}>
            {this.state.components.map((object) => {
                return <Textbox id={object.id} showDel={this.state.showDel} />
            })}
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
