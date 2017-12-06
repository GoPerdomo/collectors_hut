import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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
      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }

    case "ADD_NEW_ITEM": {
      const { userId, collectionId, item } = payload;
      const { collections } = state[userId];
      const newCollection = collections.find(collection => collection._id === collectionId);

      const newItems = [...newCollection.items, item];
      const newCollections = [...collections, newCollection];
      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser};
    }

    default: {
      return state;
    }
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default store;
