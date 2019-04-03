import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
class App extends Component {
  state = {
    todos:[{id:1, task:"Get done with this DS"},
          {id:2, task:"Charge your phone"}]
  }
  deleteTodos = (id)=>{
    console.log(id);
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo)=>{
    console.log(todo)
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="Todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodos = {this.deleteTodos} />
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
