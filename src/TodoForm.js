import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        
    }

    handleChange(event) {
        this.setState({ ...this.state, inputValue: event.target.value});
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                >
                </input>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default TodoForm;