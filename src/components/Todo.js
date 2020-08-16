import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// bring connect from react-redux, it's the bridge for connecting component to redux
import { connect } from 'react-redux'

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  GET_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED
} from '../redux/actions/todo-action'

// Components
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todo = ({
	todo: { loading, todos },
	getTodos,
	deleteTodo
}) => {
	useEffect(() => {
		getTodos()

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<TodoForm />
			{loading && 'Loading...'}

			{todos && todos.map((todo, index) => (
				<TodoItem todo={todo} key={index} deleteTodo={deleteTodo} />
			))}
		</>
	)
}

Todo.propTypes = {
	loading: PropTypes.bool,
	todos: PropTypes.array,
	getTodos: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

// Get state to props
const mapStateToProps = (state) => ({
  todo: state.todo
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: GET_TODOS_REQUESTED }),
  deleteTodo: (id) => dispatch({ type: DELETE_TODO_REQUESTED, payload: id })
})

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(Todo)