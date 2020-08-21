import React, { Component } from "react";
import Layout from "./hoc/Layout";
import ToDoList from "./containers/ToDoList/ToDoList";

class App extends Component {
  render() {
    return (
      <Layout>
        <ToDoList />
      </Layout>
    );
  }
}

export default App;
