import React, { Component } from 'react';
import './AddTodoItem.css';

const DEFAULT_TODO_VALUE = '';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: DEFAULT_TODO_VALUE
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
  }
  render() {
    return (
      <form className="add-item" onSubmit={this.submitHandler}>
        <input
          placeholder="Enter new todo item"
          type="text"
          value={this.state.todoItem}
          onChange={this.updateTodoItem}
        />
      </form>
    );
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.addItemHandler(this.state.todoItem);
    this.setState({
      todoItem: DEFAULT_TODO_VALUE
    });
  }
  updateTodoItem(event) {
    this.setState({
      todoItem: event.target.value
    });
  }
}

export default AddTodoItem;
