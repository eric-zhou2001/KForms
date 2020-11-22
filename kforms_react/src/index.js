import React, { Component } from 'react';
import ReactDOM from "react-dom";

var counter = 0;
ReactDOM.render(
    <Textbox id={ ++counter }/>, 
    document.getElementById("root")
);