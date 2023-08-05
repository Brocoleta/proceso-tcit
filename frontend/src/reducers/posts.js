const initialState = [];

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return action.json;
    /**
     * Uncomment below to generate a Typescript error by
     * having postsReducer(), which is supposed to return Thing[],
     * return 1 (an Int)
     */
    case "ADD_POSTS_SUCCESS":
      return [...state, action.json];
    case "DELETE_POSTS_SUCCESS":
      return state.filter((post) => post.id !== action.json);
    default:
      return state;
  }
}
