export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: GET_POSTS_REQUEST });
    return fetch(`http://localhost:3000/posts`)
      .then((response) => response.json())
      .then((json) => dispatch(getPostsSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function addPosts(post) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(async (response) => {
      return dispatch({
        type: "ADD_POSTS_SUCCESS",
        json: await response.json(),
      });
    });
  };
}

export function deletePosts(id) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then(async (response) => {
      return dispatch({
        type: "DELETE_POSTS_SUCCESS",
        json: id,
      });
    });
  };
}

export function getPostsSuccess(json) {
  return {
    type: GET_POSTS_SUCCESS,
    json,
  };
}
