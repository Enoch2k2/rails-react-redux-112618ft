export default (state = { todos: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_TODOS":
      return {
        ...state,
        loading: true
      }
    case "LOADED_TODOS":
      return {
        ...state,
        loading: false,
        todos: action.payload
      }
    case "ADD_TODO":
      return {
        ...state,
        loading: false,
        todos: state.todos.concat(action.payload)
      }
    default:
      return state;
  }
}