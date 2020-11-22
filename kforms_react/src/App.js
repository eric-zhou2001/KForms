import React, { Component } from 'react';
import Textbox from "./components/Textbox";
import MultipleChoice from "./components/MultipleChoice";

var counter = 0;
class App extends Component {
    render() {
        return (
        <React.Fragment>
            <main className="container">
                <MultipleChoice />
            </main>
        </React.Fragment>
        )

    }
}

export default App;
