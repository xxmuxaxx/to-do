import React from 'react'

const ToDoItem = props => {
  const classes = ['todo-item']

  if (props.status) classes.push('todo-item--done')

  return (
    <li id={props.id} className={classes.join(' ')}>
      <span className="todo-item__text">{props.children}</span>
      <div className="todo-item__buttons-wrapper">
        <button
          onClick={props.statusButtonHandler}
          className="todo-item__button todo-item__button--check"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={props.deleteButtonHandler}
          className="todo-item__button todo-item__button--delete"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
};

export default ToDoItem;
