import axios from "axios";
import toast from "react-hot-toast";

export const RegisterActions = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://api.utkubektasoglu.pro/register`,
      { email, password }
    );
    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const LoginActions = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`https://api.utkubektasoglu.pro/login`, {
      email,
      password,
    });
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};
