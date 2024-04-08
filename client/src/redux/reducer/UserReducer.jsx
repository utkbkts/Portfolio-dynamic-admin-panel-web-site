const initialState = {
  posts: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_REVIEWS":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "GET_USER_REVIEWS":
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
};
export default UserReducer;
