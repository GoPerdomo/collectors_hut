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
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(body),
});


// GET
export const getProfile = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}`, httpHeaders)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(user => {
      dispatch({
        type: "ADD_USER",
        payload: { user }
      })
    })
    .catch(err => console.error(err));
};

export const getItems = (userId, collectionId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}`, httpHeaders)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(collection => {
      dispatch({
        type: "SET_COLLECTION_ITEMS",
        payload: { collectionId, userId, items: collection.items }
      })
    })
    .catch(err => console.error(err));
};
// GET


// POST
export const signIn = (loginInfo) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/sign-in`, createPostHeaders(loginInfo))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(token => {
      localStorage.setItem('token', token)
    })
    .catch(err => console.error(err));
};

export const addCollection = (userId, newCollection) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/add-collection`, createPostHeaders(newCollection))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(collection => {
      dispatch({
        type: "ADD_NEW_COLLECTION",
        payload: { userId, collection },
      })
    })
    .catch(err => console.error(err));
};

export const addItem = (userId, collectionId, newItem) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}/add-item`, createPostHeaders(newItem))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(item => {
      dispatch({
        type: "ADD_NEW_ITEM",
        payload: { userId, collectionId, item },
      })
    })
    .catch(err => console.error(err));
};
// POST
