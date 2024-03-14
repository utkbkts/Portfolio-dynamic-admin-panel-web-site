const PortfolioReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS_PORTFOLIO":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_POST_PORTFOLIO":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "UPDATE_POST_PORTFOLIO":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST_PORTFOLIO":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default PortfolioReducer;
