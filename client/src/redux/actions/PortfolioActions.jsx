import axios from "axios";
import toast from "react-hot-toast";

export const CreatePostPortfolio = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://api.utkubektasoglu.com/createPortfolio`,
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
      `https://api.utkubektasoglu.com/getPortfolio`
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
      `https://api.utkubektasoglu.com/updatePortfolio/${id}`,
      formdata
    );
    dispatch({ type: "UPDATE_POST_PORTFOLIO", payload: data });
    if (data.status === 201) {
      toast.success("Updated successfully");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export const DeletePostsPortfolio = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://api.utkubektasoglu.com/deletePortfolio/${id}`);
    dispatch({ type: "DELETE_POST_PORTFOLIO", payload: id });
    toast.success("Deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
