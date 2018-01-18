const createHeaders = (method, body) => ({
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(body),
});


// GET
export const getProfile = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}`, createHeaders('GET'))
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
      });
    })
    .catch(err => console.error(err));
};

export const getRandomCollections = () => (dispatch, getState) => {

  fetch(`http://localhost:3030/api/collections`, createHeaders('GET'))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(data => {
      const chosen = [];
      const chosenCollections = [];
      const maxCollections = 6;
      const state = getState();

      while (chosen.length < maxCollections) {
        const num = Math.floor(Math.random() * data.length);

        if (!chosen.includes(num)) {
          const { userId } = data[num];
          
          if (!state[userId]) {
            dispatch(
              getProfile(userId)
            )
          }

          chosen.push(num);
        }
      }
      
      setTimeout(() => {
        const state = getState();

        for (const num of chosen) {
          const { userId } = data[num];
          const user = state[userId];
          const collectionId = data[num].collection._id;

          const collection = user.collections.find(collection => collection._id === collectionId);
          chosenCollections.push({ collection, user });
        }

        dispatch({
          type: "CHOSEN_COLLECTIONS",
          payload: { chosenCollections },
        });

      }, 1000)
    })
}

export const search = (searchTerms, searchType) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/search/?${searchType}=${searchTerms}`, createHeaders('GET'))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(results => {
      dispatch({
        type: "SEARCH_RESULTS",
        payload: { results, searchType }
      });
      for (const result of results) {
        dispatch(
          getProfile(result.user._id)
        );
      }
    })
    .catch(err => console.error(err));
};
// GET


// POST
export const register = (newUserInfo) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/sign-up`, createHeaders('POST', newUserInfo))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(data => {
      const { userId, token } = data;
      dispatch({
        type: "SET_CURRENT_USER",
        payload: { userId },
      });
      localStorage.setItem('token', token);
      localStorage.setItem('loggedUser', userId);
    })
    .catch(err => console.error(err));
};

export const login = (loginInfo) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/sign-in`, createHeaders('POST', loginInfo))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(data => {
      const { userId, token } = data;
      dispatch({
        type: "SET_CURRENT_USER",
        payload: { userId },
      });
      localStorage.setItem('token', token);
      localStorage.setItem('loggedUser', userId);
    })
    .catch(err => console.error(err));
};

export const addCollection = (userId, newCollection) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/add-collection`, createHeaders('POST', newCollection))
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
      });
    })
    .catch(err => console.error(err));
};

export const addItem = (userId, collectionId, newItem) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}/add-item`, createHeaders('POST', newItem))
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
      });
    })
    .catch(err => console.error(err));
};
// POST

// PUT
export const editUser = (userId, user) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}`, createHeaders('PUT', user))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(user => {
      dispatch({
        type: "EDIT_USER",
        payload: { user }
      });
    })
    .catch(err => console.error(err));
}

export const editCollection = (userId, collectionId, collection) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}`, createHeaders('PUT', collection))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(updatedCollection => {
      dispatch({
        type: "EDIT_COLLECTION",
        payload: { userId, updatedCollection }
      });
    }
    )
    .catch(err => console.error(err));
}

export const editItem = (userId, collectionId, itemId, item) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}/items/${itemId}`, createHeaders('PUT', item))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(updatedItem => {
      dispatch({
        type: "EDIT_ITEM",
        payload: { userId, collectionId, updatedItem }
      });
    }
    )
    .catch(err => console.error(err));
}
// PUT

// DELETE
export const deleteItem = (userId, collectionId, itemId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}/items/${itemId}`, createHeaders('DELETE'))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(() => {
      dispatch({
        type: "DELETE_ITEM",
        payload: { userId, collectionId, itemId },
      });
    })
    .catch(err => console.error(err));

};

export const deleteCollection = (userId, collectionId) => (dispatch, getState) => {
  fetch(`http://localhost:3030/api/users/${userId}/collections/${collectionId}`, createHeaders('DELETE'))
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then(() => {
      dispatch({
        type: "DELETE_COLLECTION",
        payload: { userId, collectionId },
      });
    })
    .catch(err => console.error(err));

};
// DELETE

// No fetch
export const fetchLocalUser = () => (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const loggedUser = localStorage.getItem('loggedUser');

  if (token) {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: { userId: loggedUser },
    });
  }
};

export const clearHomeCollections = () => (dispatch, getState) => {
  dispatch({
    type: "CHOSEN_COLLECTIONS",
    payload: {},
  });
}

export const logout = () => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CURRENT_USER",
  });
  localStorage.clear();
};
// No fetch
