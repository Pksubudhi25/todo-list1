import logo from './logo.svg';
import './App.css';
import './styles.css';

import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Practice Coding",
      done: true,
    },
    {
      id: 1,
      title: 'Practice Interview questions',
      done: false,
    },
  ]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  
  const removeTodoHandler =(updatedTasks)=>{
    setTasks(updatedTasks)
  }

  const updateTodoHandler = (updatedTodos) =>{
    setTasks(updatedTodos)
  }

  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <TodoList tasks={tasks} onAddTask={addTaskHandler} onRemoveTask={removeTodoHandler} onUpdateTodos={updateTodoHandler} />
    </div>
  );
};

export default App;
