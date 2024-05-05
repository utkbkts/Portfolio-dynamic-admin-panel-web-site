import axios from "axios";
import toast from "react-hot-toast";

export const CreatePostBLOG = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://api.utkubektasoglu.com/createBlogPost`,
      formdata
    );
    dispatch({ type: "CREATE_POST_BLOG", payload: data });
    toast.success("Created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const GetBlogPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.utkubektasoglu.com/getBlogPost`
    );
    dispatch({ type: "GET_POSTS_BLOG", payload: data });
  } catch (error) {
    toast.error(error.message);
  }
};

export const UpdatePostsBLOG = (formData, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `https://api.utkubektasoglu.com/updateBlogPost/${id}`,
      formData
    );

    dispatch({ type: "UPDATE_POST_BLOG", payload: data });
    toast.success("Updated successfully");
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};

export const DeleteBlogPost = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://api.utkubektasoglu.com/deleteBlogPost/${id}`);
    dispatch({ type: "DELETE_POST_BLOG", payload: id });
    toast.success("Deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
