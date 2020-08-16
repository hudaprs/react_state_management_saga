import { 
	SET_LOADING,
	GET_TODOS,
	SET_TODO_TITLE,
	CREATE_TODO,
	DELETE_TODO,
	CLEAR_TODO_TITLE
} from '../actions/todo-action'

// Define your state here
const initialState = {
	loading: false,
	todos: [],
	title: ''
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
	switch(type) {
		// Set loading
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		// Get todos
		case GET_TODOS:
			return {
				...state,
				todos: payload,
				loading: false
			}
		// Set todo title from user that gonna input a title in form
		case SET_TODO_TITLE:
			return {
				...state,
				title: payload
			}
		// Create new todo
		case CREATE_TODO:
			return {
				...state,
				todos: [payload, ...state.todos],
				loading: false
			}
		// Clear todo title in form after creating a new one
		case CLEAR_TODO_TITLE:
			return {
				...state,
				title: ''
			}
		// Delete existed todo
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== payload),
				loading: false
			}
		// Return default state if you didn't match any case
		default:
			return state
	}
}