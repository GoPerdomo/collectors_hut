const httpHeaders = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

const createPostHeaders = (body) => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body),
});

export const getProfile = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}`, httpHeaders)
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: "ADD_USER",
        payload: { user }
      })
    })
    .catch(err => console.error(err));
}

export const getItems = (userId, collectionId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}`, httpHeaders)
    .then(res => res.json())
    .then(collection => {
      dispatch({
        type: "SET_COLLECTION_ITEMS",
        payload: { collectionId, userId, items: collection.items }
      })
    })
    .catch(err => console.error(err));
}

export const addCollection = (userId, newCollection) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/add-collection`, createPostHeaders(newCollection))
    .then(res => res.json())
    .then(collection => {
      dispatch({
        type: "ADD_NEW_COLLECTION",
        payload: { userId, collection },
      })
    })
    .catch(err => console.error(err));
}

export const addItem = (userId, collectionId, newItem) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}/add-item`, createPostHeaders(newItem))
    .then(res => res.json())
    .then(item => {
      dispatch({
        type: "ADD_NEW_ITEM",
        payload: { userId, collectionId, item },
      })
    })
    .catch(err => console.error(err));
}
