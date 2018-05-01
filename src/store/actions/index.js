import { theFetcher, photoSender } from '../../utils/fetchers';

// GET
export const getProfile = userId => async (dispatch, getState) => {
  const user = await theFetcher({
    url: `users/${userId}`,
    method: 'GET'
  });

  if (user) {
    dispatch({
      type: "ADD_USER",
      payload: { user }
    });
  }
};

export const getRandomCollections = () => async (dispatch, getState) => {
  const allCollections = await theFetcher({
    url: 'collections',
    method: 'GET'
  });
  const chosen = new Set();
  const userIdArray = [];
  const maxCollections = 6;

  const randomizeCollections = () => {
    while (chosen.size < maxCollections) {
      const num = Math.floor(Math.random() * allCollections.length);
      const { userId } = allCollections[num];

      userIdArray.push(userId);
      chosen.add(num);
    }
  }

  const fetchSelectedUsers = async userIdArray => {
    for (const userId of userIdArray) {
      const user = await theFetcher({
        url: `users/${userId}`,
        method: 'GET'
      });

      if (user) {
        dispatch({
          type: "ADD_USER",
          payload: { user }
        });
      }
    }

    return getState();
  }

  randomizeCollections();

  fetchSelectedUsers(userIdArray).then(state => {
    const chosenCollections = [];

    if (chosenCollections) {
      [...chosen].map(num => {
        const { userId } = allCollections[num];
        const user = state[userId];
        const collectionId = allCollections[num].collection._id;
        const collection = user.collections.find(collection => collection._id === collectionId);

        return chosenCollections.push({ collection, user });
      })

      dispatch({
        type: "CHOSEN_COLLECTIONS",
        payload: { chosenCollections },
      });
    }
  });
}

export const search = (searchTerms, searchType) => async (dispatch, getState) => {
  const results = await theFetcher({
    url: `search/?${searchType}=${searchTerms}`,
    method: 'GET'
  });

  if (results) {
    dispatch({
      type: "SEARCH_RESULTS",
      payload: { results, searchType }
    });
    for (const result of results) {
      dispatch(
        getProfile(result.user._id)
      );
    };
  }
}


// POST
export const register = newUserInfo => async (dispatch, getState) => {
  const data = await theFetcher({
    url: `sign-up`,
    method: 'POST',
    body: newUserInfo
  });

  if (data) {
    const { userId, token } = data;

    dispatch({
      type: "SET_CURRENT_USER",
      payload: { userId },
    });
    localStorage.setItem('token', token);
    localStorage.setItem('loggedUser', userId);
  } else {
    dispatch({
      type: "REGISTER_FAILED",
    })
  }
};

export const login = loginInfo => async (dispatch, getState) => {
  const data = await theFetcher({
    url: 'sign-in',
    method: 'POST',
    body: loginInfo
  });

  if (data) {
    const { userId, token } = data;

    dispatch({
      type: "SET_CURRENT_USER",
      payload: { userId },
    });
    localStorage.setItem('token', token);
    localStorage.setItem('loggedUser', userId);
  } else {
    dispatch({
      type: "LOGIN_FAILED",
    })
  }
};

export const addCollection = (userId, newCollection) => async (dispatch, getState) => {
  const collection = await theFetcher({
    url: `users/${userId}/add-collection`,
    method: 'POST',
    body: newCollection
  });

  if (collection) {
    dispatch({
      type: "ADD_NEW_COLLECTION",
      payload: { userId, collection },
    });
  }
};

export const addItem = (userId, collectionId, newItem) => async (dispatch, getState) => {
  const { newItemInfo, newItemPhoto } = newItem;

  const item = await theFetcher({
    url: `users/${userId}/collections/${collectionId}/add-item`,
    method: 'POST',
    body: newItemInfo,
  })
    .then(res => photoSender(res, newItemPhoto))
    .catch(err => console.error(err));

  if (item) {
    dispatch({
      type: "ADD_NEW_ITEM",
      payload: { userId, collectionId, item },
    });
  }
};

export const sendContact = contactInfo => (dispatch, getState) => {
  theFetcher({
    url: 'contact',
    method: 'POST',
    body: contactInfo,
  });
};

export const subNewsletter = email => (dispatch, getState) => {
  theFetcher({
    url: 'newsletter',
    method: 'POST',
    body: email,
  });
};


// PUT
export const editUser = (userId, user) => async (dispatch, getState) => {
  const { userInfo, userPhoto } = user;
  const updatedUser = await theFetcher({
    url: `users/${userId}`,
    method: 'PUT',
    body: userInfo
  })
    .then(res => photoSender(res, userPhoto))
    .catch(err => console.error(err));

  if (updatedUser) {
    dispatch({
      type: "EDIT_USER",
      payload: { user: updatedUser }
    });
  }
}

export const editCollection = (userId, collectionId, collection) => async (dispatch, getState) => {
  const updatedCollection = await theFetcher({
    url: `users/${userId}/collections/${collectionId}`,
    method: 'PUT',
    body: collection
  });

  if (updatedCollection) {
    dispatch({
      type: "EDIT_COLLECTION",
      payload: { userId, updatedCollection }
    });
  }
}

export const editItem = (userId, collectionId, itemId, editedItem) => async (dispatch, getState) => {
  const { itemInfo, itemPhoto } = editedItem;
  const updatedItem = await theFetcher({
    url: `users/${userId}/collections/${collectionId}/items/${itemId}`,
    method: 'PUT',
    body: itemInfo
  })
    .then(res => photoSender(res, itemPhoto))
    .catch(err => console.error(err));

  if (updatedItem) {
    dispatch({
      type: "EDIT_ITEM",
      payload: { userId, collectionId, updatedItem }
    });
  }
}


// DELETE
export const deleteItem = (userId, collectionId, itemId) => (dispatch, getState) => {
  theFetcher({
    url: `users/${userId}/collections/${collectionId}/items/${itemId}`,
    method: 'DELETE'
  });
  dispatch({
    type: "DELETE_ITEM",
    payload: { userId, collectionId, itemId },
  });
};

export const deleteCollection = (userId, collectionId) => (dispatch, getState) => {
  theFetcher({
    url: `users/${userId}/collections/${collectionId}`,
    method: 'DELETE'
  });
  dispatch({
    type: "DELETE_COLLECTION",
    payload: { userId, collectionId },
  });
};


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
