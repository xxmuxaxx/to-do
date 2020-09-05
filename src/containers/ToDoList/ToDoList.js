import React, { Component } from "react";
import ToDoItem from "../../components/ToDoItem/ToDoItem";

class ToDoList extends Component {
  state = {
    id: 1,
    todoName: "",
    todos: [
      {id: 1, value: 'Купить молоко', status: true}
    ],
  };

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <ToDoItem
          id={todo.id}
          key={todo.id}
          status={todo.status}
          statusButtonHandler={this.statusButtonHandler}
          deleteButtonHandler={this.deleteButtonHandler}
        >
          {todo.value}
        </ToDoItem>
      );
    });
  }

  statusButtonHandler = (event) => {
    const todoId = event.target.closest('.todo-item').getAttribute('id')
    const newState = this.state.todos.map(todo => {
      if (todo.id === +todoId) {
        todo.status = !todo.status
      }

      return todo
    })

    this.setState({ todos: newState })
  }

  deleteButtonHandler = (event) => {
    const todoId = event.target.closest('.todo-item').getAttribute('id')
    const newState = this.state.todos.filter(todo => todo.id !== +todoId)

    this.setState({ todos: newState })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: this.state.id,
      name: this.state.todoName,
      status: false,
    };

    this.setState({
      id: this.state.id + 1,
      todos: [...this.state.todos, newTodo],
    });
  };

  inputChangeHundler = (event) => {
    this.setState({ todoName: event.target.value });
  };

  render() {
    return (
      <section className="toDo-section">
        <h1 className="page-title">ToDo List</h1>
        <hr />
        <ul className="todo-list">{this.renderTodos()}</ul>
        <hr />
        <form onSubmit={this.onSubmitHandler}>
          <h2>Create new ToDo</h2>
          <p>to create new ToDo write text in input and press button</p>
          <input type="text" onChange={this.inputChangeHundler} />
          <input type="submit" className="button" value="Create" />
        </form>
      </section>
    );
  }
}

export default ToDoList;
