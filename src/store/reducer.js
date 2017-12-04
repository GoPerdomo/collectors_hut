import { createStore } from 'redux';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "ADD_USER": {
      return { ...state, [payload.user._id]: { ...payload.user } };
    }

    case "SET_COLLECTION_ITEMS": {
      const { collectionId, userId, items } = payload;
      const newCollections = state[userId].collections.map(collection => (
        collection._id === collectionId ? { ...collection, items } : collection
      ));
      const newState = { ...state, [userId]: { ...state[userId], collections: newCollections } }

      return newState;
    }

    case "ADD_NEW_COLLECTION": {
      const { userId, collection } = payload;
      const newCollections = [...state[userId].collections, collection];
      const newUser = { [userId]: {...state[userId], collections: newCollections}};

      return { ...state, ...newUser };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
