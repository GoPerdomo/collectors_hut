import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    // User
    case "SET_CURRENT_USER": {
      return { ...state, loggedUser: payload.userId };
    }

    case "REMOVE_CURRENT_USER": {
      return {};
    }

    case "ADD_USER": {
      if (state[payload.user._id]) return state;
      return { ...state, [payload.user._id]: { ...payload.user } };
    }

    case "EDIT_USER": {
      return { ...state, [payload.user._id]: { ...payload.user } };
    }
    // User

    // Collection
    case "GET_HOME_COLLECTIONS": {
      return { ...state, payload };
    }

    case "ADD_NEW_COLLECTION": {
      const { userId, collection } = payload;
      const newCollections = [...state[userId].collections, collection];
      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }

    case "EDIT_COLLECTION": {
      const { userId, updatedCollection } = payload;
      const newCollections = state[userId].collections.map(collection => (
        collection._id === updatedCollection._id ? { ...collection, ...updatedCollection } : collection
      ));
      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }

    case "DELETE_COLLECTION": {
      const { userId, collectionId } = payload;
      const { collections } = state[userId];

      const newCollections = collections.filter(collection => collection._id !== collectionId);
      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }
    // Collection

    // Item
    case "ADD_NEW_ITEM": {
      const { userId, collectionId, item } = payload;
      const { collections } = state[userId];

      const newCollections = collections.map(collection => {
        if (collection._id !== collectionId) return collection;
        const newItems = [...collection.items, item];
        return { ...collection, items: newItems };
      });

      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }

    case "EDIT_ITEM": {
      const { userId, collectionId, updatedItem } = payload;
      const { collections } = state[userId];

      const newCollections = collections.map(collection => {
        if (collection._id !== collectionId) return collection;
        const newItems = collection.items.map(item => {
          if (item._id !== updatedItem._id) return item;
          return { ...item, ...updatedItem }
        })
        return { ...collection, items: newItems };
      });

      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }

    case "DELETE_ITEM": {
      const { userId, collectionId, itemId } = payload;
      const { collections } = state[userId];

      const newCollections = collections.map(collection => {
        if (collection._id !== collectionId) return collection;
        const newItems = collection.items.filter(item => item._id !== itemId)
        return { ...collection, items: newItems };
      });

      const newUser = { [userId]: { ...state[userId], collections: newCollections } };

      return { ...state, ...newUser };
    }
    // Item

    // Others
    case "SEARCH_RESULTS": {
      const { results, searchType } = payload;
      return { ...state, results, searchType };
    }

    case "CHOSEN_COLLECTIONS": {
      return { ...state, chosenCollections: payload.chosenCollections };
    }
    // Others

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
