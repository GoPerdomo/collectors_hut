const { NODE_ENV, REACT_APP_PROD_API_URL, REACT_APP_DEV_API_URL } = process.env;
const apiUrl = (NODE_ENV === "production") ? REACT_APP_PROD_API_URL : REACT_APP_DEV_API_URL;

const createHeaders = (method, body) => ({
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
  },
  body: JSON.stringify(body),
});

export const theFetcher = actions => {
  const { url, method, body } = actions;

  return fetch(`${apiUrl}${url}`, createHeaders(method, body))
    .then(res => {
      if (!res.ok) throw res;
      else return res.json();
    })
    .then(data => data)
    .catch(err => console.error(err));
};

// Uploads item photo to AWS S3 if signedUrl is present
export const photoSender = (res, photo) => {
  return res.signedUrl
    ? fetch(res.signedUrl, { method: 'PUT', body: photo })
      .then(() => res.data)
      .catch(err => console.error(err))
    : res.data
};
