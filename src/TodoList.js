import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreators';
import { Route } from 'react-router-dom';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(value) {
        this.props.addTodo(value);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }
    
    render() {
        let todos = this.props.todos.map( (value, index) => (
            <TodoItem 
                removeTodo={this.removeTodo.bind(this, value.id)} 
                key={index} 
                task={value.task} 
            />
        ));

        return (
            <div>
                <Route path='/todos/new' component={props => (
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                )}
                />
                <Route exact path='/todos' component={() => <div><ul>{todos}</ul></div>} />
            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    };
}

export default connect(mapStateToProps, {addTodo, removeTodo })(TodoList);