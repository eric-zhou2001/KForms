import React, { Component } from 'react';

class MultipleChoice extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <label>Options: </label>
                    <select id="whatever" name="whatever">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>   
            </form>
         );
    }
}
 
export default MultipleChoice;