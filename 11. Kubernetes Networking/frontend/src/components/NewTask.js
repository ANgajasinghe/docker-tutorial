import React, { useState } from 'react';

import './NewTask.css';

function NewTask(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');

  function submitForm(event) {
    event.preventDefault();
    if (
      enteredTitle &&
      enteredTitle.trim().length > 0 &&
      enteredText &&
      enteredText.trim().length > 0
    ) {
      props.onAddTask({ title: enteredTitle, text: enteredText });
      setEnteredTitle('');
      setEnteredText('');
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div className='form-control'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          onChange={(event) => setEnteredTitle(event.target.value)}
          value={enteredTitle}
        ></input>
      </div>
      <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          id='text'
          onChange={(event) => setEnteredText(event.target.value)}
          value={enteredText}
        ></input>
      </div>
      <button type='submit'>Add Task</button>
    </form>
  );
}

export default NewTask;
