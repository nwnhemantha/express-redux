import { history } from '../index.js'
const LOGIN = 'LOGIN'
const LOGIN_FAILED = 'LOGIN_FAILED'
const LOGIN_DONE = 'LOGIN_DONE'

const initialState = {
  user: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_DONE:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export function login() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_DONE,
      payload: { user: 'user', age: 30 }
    })
    history.push('/dashboard')
  }
}
