import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, deleteTodo }) => {
	return (
		<p 
			onDoubleClick={() => deleteTodo(todo.id)} 
			style={{ cursor: 'pointer' }}
		>
			{todo.title}
		</p>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

export default TodoItem