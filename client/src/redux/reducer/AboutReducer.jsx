const AboutPostReducer = (state = { postsAbout: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        postsAbout: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        postsAbout: [...state.postsAbout, action.payload],
      };
    case "UPDATE_POST":
      return {
        ...state,
        postsAbout: state.postsAbout.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        postsAbout: state.postsAbout.filter(
          (post) => post?.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AboutPostReducer;
