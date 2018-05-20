import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.props.addTodo(this.state.task);
        this.props.handleSubmit(this.state.task);
        event.target.reset();
        this.props.history.push('/todos');
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Task</label>
                <input
                name="task" 
                type="text" 
                onChange={this.handleChange} 
                />
                <button>Add a Todo!</button>
            </form>
        );
    }
}

export default NewTodoForm;