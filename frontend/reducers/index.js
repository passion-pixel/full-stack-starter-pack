const initialState = {
  title: 'React Redux App',
  count: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {...state, count: ++state.count};
    default:
      return state;
  }
}

export default rootReducer;
