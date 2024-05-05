import axios from "axios";
import toast from "react-hot-toast";

export const ReviewsActions =
  (rating, userNick, userEmail, data2) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        `https://api.utkubektasoglu.com/reviews`,
        { rating, userNick, userEmail, ...data2 }
      );
      dispatch({ type: "CREATE_REVIEWS", payload: data });
      toast.success("Successfully");
      return data;
    } catch (error) {
      console.log(error);
      toast.error("You can comment once");
      throw new Error(error.message);
    }
  };

export const GetUserActions = () => async (dispatch) => {
  try {
    const response = await fetch(`https://api.utkubektasoglu.com/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "GET_USER_REVIEWS", payload: data });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
