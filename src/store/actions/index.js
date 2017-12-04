const httpHeaders = {
  "method": 'GET',
  "Content-Type": "application/json"
};

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
