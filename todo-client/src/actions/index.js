export const getTodos = () => {
  return dispatch => {
    dispatch({type: "LOADING_TODOS"});
    console.log('a')
    let updatedState = fetch('/todos')
      .then(resp => {
          console.log('b')
          return resp.json()
        }
      )
      .then(todos => {
          console.log('c', todos);
          return dispatch({type: "LOADED_TODOS", payload: todos})
        }
      )
      .catch(err => {
        console.log('d')
      })
    for (let i = 0; i < 1000; i++) {
      console.log('e')
    }
    return updatedState;
    // a e b c
  }

  // return function (dispatch)
    // dispatch action to start the loading process
    // return fetch url
      // get response
      // dispatch data
}