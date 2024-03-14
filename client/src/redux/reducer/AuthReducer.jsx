const AuthReducer = (state = { auth: null }, action) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("admin", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGIN":
      localStorage.setItem("admin", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
export default AuthReducer;
