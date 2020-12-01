import React, { Component } from 'react';
import "./Textbox.css";
import { Icon, InlineIcon } from '@iconify/react';
import iosRemoveCircle from '@iconify-icons/ion/ios-remove-circle';


class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            question: "",
            content: "",
            displayDel: props.showDel
        }
    }

    /**
     * Updates the state with the new props (showDel).
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state) {
        return {
            displayDel: props.showDel
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

    saveQuestion = (event) => {
        this.setState({
            question: event.target.value
        })
    }
    
    render = () => { 
        var removeButton;
        if (this.state.displayDel) {
            removeButton = <Icon className="removeIcon" icon={iosRemoveCircle} />;
        } else {
            removeButton = "";
        }
        return (
            <div className={"center-container"}>
                {removeButton}
                <form className={"textbox-form"}>
                    <label 
                        htmlFor={"textBox_" + this.state.id}
                        className={"textbox-label"}
                    >
                        Enter in a question for users to respond to:
                    </label>

                    <input
                        type={"text"}
                        className={"textbox-question"}
                        placeholder={"Enter a question..."}
                        onChange={this.saveQuestion}
                    ></input>

                    <textarea 
                        type="text"
                        className={"textbox"}
                        id={"textBox_" + this.state.id}
                        name={"textBox_" + this.state.id}
                        value={this.state.content}
                        onChange = {this.saveContent}
                        placeholder={"Please enter a description..."}
                    ></textarea>
                </form>
            </div>
        );
    }
}
 
export default Textbox;