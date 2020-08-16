import React from 'react'
import PropTypes from 'prop-types'

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux'

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  SET_TODO_TITLE_REQUESTED,
  CREATE_TODO_REQUESTED
} from '../redux/actions/todo-action'

const TodoForm = ({
	title,
	setTodoTitle,
	createTodo
}) => {
	const onChange = (e) => {
		setTodoTitle(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		createTodo(title)
	}

	return (
		<form onSubmit={onSubmit}>
			<input 
				type="text" 
				placeholder="What needs to be done..." 
				onChange={onChange}
				value={title}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

TodoForm.propTypes = {
	title: PropTypes.string,
	setTodoTitle: PropTypes.func.isRequired,
	createTodo: PropTypes.func.isRequired
}

// Get state to props
const mapStateToProps = (state) => ({
  title: state.todo.title
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  setTodoTitle: (title) => dispatch({ type: SET_TODO_TITLE_REQUESTED, payload: title }),
  createTodo: (title) => dispatch({ type: CREATE_TODO_REQUESTED, payload: title }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)