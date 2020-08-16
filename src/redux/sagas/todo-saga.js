// Import the redux-saga/effects
import {
  put,
  call,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'

// Import all actions and api's
import {
  SET_LOADING,
  GET_TODOS,
  GET_TODOS_REQUESTED,
  SET_TODO_TITLE,
  SET_TODO_TITLE_REQUESTED,
  CLEAR_TODO_TITLE,
  CREATE_TODO,
  CREATE_TODO_REQUESTED,
  DELETE_TODO,
  DELETE_TODO_REQUESTED
} from '../actions/todo-action'

// Import all api's
import {
  getAllTodos,
  createNewTodo,
  deleteExistedTodo
} from '../api/todo-api'

// Here's the unique part, generator function*, function with asterisk(*)

// Get Todos
function* getTodos() {
  yield put({ type: SET_LOADING })

  const todos = yield call(getAllTodos)

  yield put({ type: GET_TODOS, payload: todos })
}

// Set the title of todo
function* setTodoTitle({ payload }) {
  yield put({ type: SET_TODO_TITLE, payload })
}

// Create Todo
function* createTodo({ payload }) {
  yield put({ type: SET_LOADING })

  const newTodo = yield call(createNewTodo, payload)

  yield put({ type: CREATE_TODO, payload: newTodo })
  
  // Clear todo after creating
  yield put({ type: CLEAR_TODO_TITLE })
}

// Delete todo
function* deleteTodo({ payload }) {
  yield put({ type: SET_LOADING })

  const todo = yield call(deleteExistedTodo, payload)

  yield put({ type: DELETE_TODO, payload: todo })
}

// Export the saga (todo-saga)
export default function* todoSaga() {
  yield takeEvery(GET_TODOS_REQUESTED, getTodos)
  yield takeEvery(SET_TODO_TITLE_REQUESTED, setTodoTitle)
  yield takeLatest(CREATE_TODO_REQUESTED, createTodo)
  yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo)
}