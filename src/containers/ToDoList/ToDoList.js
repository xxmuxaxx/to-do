import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    todoName: "",
    todos: [
      {
        id: 1,
        name: "Купить доширак",
        status: true,
      },
    ],
  };

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <li id={todo.id} key={todo.id}>
          <p>{todo.name}</p>
        </li>
      );
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: this.state.todos.length + 1,
      name: this.state.todoName,
      status: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  inputChangeHundler = (event) => {
    this.setState({ todoName: event.target.value });
    console.log(this.state.todoName);
  };

  render() {
    return (
      <section className="toDo-section">
        <h1 className="page-title">ToDo List</h1>
        <hr />
        <ul>{this.renderTodos()}</ul>
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
