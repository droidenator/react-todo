import React, { Component } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  addItemHandler(newItem) {
    let todos = [...this.state.todos];

    todos.unshift({
      id: todos.length + 1,
      label: newItem,
      isChecked: false
    });

    this.setState({
      todos
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          label: 'Write Angular ToDo example',
          isChecked: false
        },
        {
          id: 2,
          label: 'Write React ToDo example',
          isChecked: true
        },
        {
          id: 3,
          label: 'Write Vue ToDo example',
          isChecked: false
        }
      ]
    };

    this.addItemHandler = this.addItemHandler.bind(this);
    this.todoHandler = this.todoHandler.bind(this);
  }
  todoHandler(id) {
    const todos = [...this.state.todos];
    const todoIndex = todos.findIndex(todo => todo.id === id);
    todos[todoIndex].isChecked = !todos[todoIndex].isChecked;

    this.setState({
      todos
    });
  }
  render() {
    const todos = this.state.todos
      .filter(todo => !todo.isChecked)
      .map(todo => (
        <TodoItem
          key={todo.id}
          item={todo}
          handler={() => this.todoHandler(todo.id)}
        />
      ));

    const completedTodos = this.state.todos
      .filter(todo => todo.isChecked)
      .map(todo => <div key={todo.id}>{todo.label}</div>);

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AddTodoItem addItemHandler={this.addItemHandler} />
        <div className="todo-container">{todos}</div>
        <h3>Completed</h3>
        <div className="completed-todo-container">{completedTodos}</div>
      </div>
    );
  }
}

export default App;
