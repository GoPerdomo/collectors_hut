import { createStore } from 'redux';

const reducer = (state = {}, { type, payload }) => {
  switch(type) {
    case "SET_CURRENT_USER":
      return { ...state, ...payload.user };
    case "SET_CURRENT_USERS_COLLECTIONS":
      return { ...state, ...payload.collection };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
