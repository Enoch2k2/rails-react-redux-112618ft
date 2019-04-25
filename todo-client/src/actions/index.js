export const getTodos = () => {
  return dispatch => {
    dispatch({type: "LOADING_TODOS"});
    return fetch('/todos')
      .then(resp => resp.json())
      .then(todos => dispatch({type: "LOADED_TODOS", payload: todos}))
  }

  // return function (dispatch)
    // dispatch action to start the loading process
    // return fetch url
      // get response
      // dispatch data
}

export const createTodo = (todo) => {
  return dispatch => {
    return fetch('/todos', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({todo})
      })
      .then(resp => resp.json())
      .then(todo => dispatch({type: "ADD_TODO", payload: todo}))
  }
}