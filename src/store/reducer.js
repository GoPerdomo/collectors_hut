import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case "SET_CURRENT_USER":
      return Object.assign({}, state, action.payload.user);

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
