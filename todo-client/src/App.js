import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './actions';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render(){
    const todos = !this.props.loading ? this.props.todos.map((todo, i) => <li key={i}>{todo.description} - { todo.completed ? 'Complete' : 'Not Complete' }</li>) : <li>Loading...</li>
    return (
      <div className="App">
        <h2>Create Todo</h2>
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

export default connect(mapStateToProps, { getTodos })(App);
