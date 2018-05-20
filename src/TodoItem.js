import React from 'react';

const TodoItem = ({task, removeTodo}) => (
    <li>
        {task}
        <button onClick={removeTodo}>X</button>
    </li>
);

export default TodoItem;