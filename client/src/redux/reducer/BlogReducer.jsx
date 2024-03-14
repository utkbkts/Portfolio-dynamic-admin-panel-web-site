const BlogPostReducer = (state = { postsBlog: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS_BLOG":
      return {
        ...state,
        postsBlog: action.payload,
      };
    case "CREATE_POST_BLOG":
      return {
        ...state,
        postsBlog: [...state.postsBlog, action.payload],
      };
    case "UPDATE_POST_BLOG":
      return {
        ...state,
        postsBlog: state.postsBlog.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST_BLOG":
      return {
        ...state,
        postsBlog: state.postsBlog.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default BlogPostReducer;
