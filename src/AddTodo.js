import React, { useState } from 'react';

const AddTodo = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      id: Math.floor(Math.random() * 1000), // Generate a unique ID
      title: enteredTitle,
      done: false, // Assuming newly added tasks are not done
    };
    props.saveTodoDataHandler(todoData)
    setEnteredTitle('');

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Tasks</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;