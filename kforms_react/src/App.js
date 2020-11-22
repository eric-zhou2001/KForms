import React, { Component } from 'react';
import Textbox from "./components/Textbox";

var counter = 0;
class App extends Component {
    render() {
        return <Textbox id = { ++counter }/>
    }
}

export default App;
