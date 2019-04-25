import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, createTodo } from './actions';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      completed: false,
      description: ''
    }
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleChangeCompleted = e => {
    this.setState({
      completed: e.target.checked
    })
  }

  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state)
    this.resetState();
  }

  resetState = () => {
    this.setState({
      completed: false,
      description: ''
    })
  }

  render(){
    const todos = !this.props.loading ? this.props.todos.map((todo, i) => <li key={i}>{todo.description} - { todo.completed ? 'Complete' : 'Not Complete' }</li>) : <li>Loading...</li>
    return (
      <div className="App">
        <h2>Create Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Description: </label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription} /><br /><br />
          <label>Completed</label>
          <input type="checkbox" name="completed" value={this.state.completed} onChange={this.handleChangeCompleted} checked={this.state.completed}/><br /><br />
          <input type="submit" value="Create Todo" />
        </form>
        <hr />
        <h2>Todo List</h2>
        <ul>
          { todos }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    loading: state.todosReducer.loading
  }
}

export default connect(mapStateToProps, { getTodos, createTodo })(App);
