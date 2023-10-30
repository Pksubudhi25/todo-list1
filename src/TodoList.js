import React from 'react';
import AddTodo from './AddTodo';
import './TodoList.css'

const TodoList = (props) => {
    const saveTodoDataHandler = (todoData) => {
        props.onAddTask(todoData);
    };

    const removeTaskHandler = (taskId) => {
        // Implement task removal logic here and pass the task ID to be removed
        const updatedTasks = props.tasks.filter(task =>task.id !==taskId )
        props.onRemoveTask(updatedTasks)
        console.log("Remove task with ID:", taskId);
    };

    const toggleDoneHandler = (taskId) => {
        // Implement logic to toggle the 'done' status of the task with the given ID
        console.log("Toggle done for task with ID:", taskId);
    
        const updatedTodos = props.tasks.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
            );
    
        // Assuming you have a function to update the tasks list in your parent component,
        // call it here to update the tasks with the updatedTodos.
        props.onUpdateTodos(updatedTodos); 
    };

    return (
        <div>
        <ul>
            {props.tasks.map((task) => (
            <li key={task.id}>
                {task.title}
                <input
                type="checkbox"
                checked={task.done}
                onClick={() => toggleDoneHandler(task.id)}
                />
                <button onClick={() => removeTaskHandler(task.id)}>Remove</button>
            </li>
            ))}
        </ul>
        <AddTodo saveTodoDataHandler={saveTodoDataHandler} />
        </div>
    );
};


export default TodoList;