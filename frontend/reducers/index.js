const initialState = {
  title: 'React Redux App',
  count: 0,
}

export default function root(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {...state, count: ++state.count}
    default:
      return state
  }
}
