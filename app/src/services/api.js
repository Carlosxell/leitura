const url = "http://localhost:3001";
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () => fetch(
  `${url}/categories`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data.categories)

export const getPosts = () => fetch(
  `${url}/posts`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data)

export const getPostsByCategory = (data) => fetch(
  `${url}/${data}/posts`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data)

export const getPost = (data) => fetch(
  `${url}/posts/${data}`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data)

export const createPost = (data) => fetch(
  `${url}/posts`,
  {
    method: 'post',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
).then(res => res.json()).then(data => data)

export const editPost = (data) => fetch(
  `${url}/posts/${data.id}`,
  {
    method: 'put',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
).then(res => res.json()).then(data => data)

export const deletePost = (data) => fetch(
  `${url}/posts/${data}`,
  {
    method: 'delete',
    headers: headers
  }
).then(res => res.json()).then(data => data)

export const getComments = (data) => fetch(
  `${url}/posts/${data}/comments`,
  {
    headers: headers
  }
).then(res => res.json()).then(data => data)

export const getComment = (data) => fetch(
  `${url}/comments/${data}`,
  {
    headers: headers
  }
).then(res => res.json()).then(data => data)

export const createComment = (data) => fetch(
  `${url}/comments`,
  {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(data => data)

export const editComment = (data) => fetch(
  `${url}/comments/${data.id}`,
  {
    method: 'put',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
).then(res => res.json()).then(data => data)

export const deleteComment = (data) => fetch(
  `${url}/comments/${data}`,
  {
    method: 'delete',
    headers: headers
  }
).then(res => res.json()).then(data => data)

export const votePost = (data, option, path) => fetch(
  `${url}/${path}/${data}`,
  {
    method: 'post',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(option)
  }
).then(res => res.json()).then(data => data)
