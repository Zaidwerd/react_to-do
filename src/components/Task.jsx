import React from 'react';

const Task = props => (
  <button
    type="button"
    className="list-group-item"
    title="Click to Complete"
    onClick={props.click}
  >
    <strong>{props.title}</strong> {props.description}
  </button>
);
export default Task;
