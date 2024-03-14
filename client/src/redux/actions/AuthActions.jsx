import axios from "axios";
import toast from "react-hot-toast";

export const RegisterActions = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      { email, password }
    );
    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const LoginActions = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};
