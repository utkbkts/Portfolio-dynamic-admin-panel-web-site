import axios from "axios";
import toast from "react-hot-toast";

export const CreatePostAbout = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://api.utkubektasoglu.com/createAboutPost`,
      formData
    );
    dispatch({ type: "CREATE_POST", payload: data });
    toast.success("Created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const GetAboutPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.utkubektasoglu.com/getAboutPost`
    );
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const UpdatePostsAbout = (formData, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `https://api.utkubektasoglu.com/updateAboutPost/${id}`,
      formData
    );

    dispatch({ type: "UPDATE_POST", payload: data });
    toast.success("Updated successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
