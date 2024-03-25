import axios from "axios";
import toast from "react-hot-toast";

export const CreatePostPortfolio = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/createPortfolio`,
      formdata
    );
    dispatch({ type: "CREATE_POST_PORTFOLIO", payload: data });
    toast.success("Created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const GetAboutPortfolio = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/getPortfolio`
    );
    dispatch({ type: "GET_POSTS_PORTFOLIO", payload: data });
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const UpdatePostsPortfolio = (id, formdata) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/updatePortfolio/${id}`,
      formdata
    );
    dispatch({ type: "UPDATE_POST_PORTFOLIO", payload: data });
    console.log(data);
    if (data.status === 201) {
      toast.success("Updated successfully");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export const DeletePostsPortfolio = (id) => async (dispatch) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/deletePortfolio/${id}`);
    dispatch({ type: "DELETE_POST_PORTFOLIO", payload: id });
    toast.success("Deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
