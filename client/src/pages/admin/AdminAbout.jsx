import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePostAbout,
  GetAboutPost,
  UpdatePostsAbout,
} from "../../redux/actions/AboutActions";
import FileBase from "react-file-base64";

const initialState = {
  title: "",
  paragraph: "",
  name: "",
  birthday: "",
  experience: "",
  phone: "",
  email: "",
  educationLevel: "",
  projectFinished: "",
  freelance: "",
  selectedFile: null,
};

const AdminAbout = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { postsAbout } = useSelector((state) => state.aboutPost);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      dispatch(UpdatePostsAbout(formData));
    } else {
      dispatch(CreatePostAbout(formData));
    }
  };

  useEffect(() => {
    dispatch(GetAboutPost());
  }, []);

  useEffect(() => {
    if (postsAbout && postsAbout.length > 0) {
      setFormData({
        title: postsAbout[0]?.title || "",
        paragraph: postsAbout[0].paragraph || "",
        name: postsAbout[0].name || "",
        birthday: postsAbout[0].birthday || "",
        experience: postsAbout[0].experience || "",
        phone: postsAbout[0].phone || "",
        email: postsAbout[0].email || "",
        educationLevel: postsAbout[0].educationLevel || "",
        projectFinished: postsAbout[0].projectFinished || "",
        freelance: postsAbout[0].freelance || "",
        selectedFile: postsAbout[0].selectedFile || null,
      });
    }
  }, [postsAbout]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 text-black p-2">Field</th>
                <th className="border border-gray-300 text-black p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formData).map(([field, value]) => (
                <tr key={field}>
                  <td className="border border-gray-300 p-2">{field}</td>
                  <td className="border border-gray-300 p-2 w-2/3">
                    {field === "birthday" ? (
                      <input
                        type="date"
                        name={field}
                        value={value}
                        onChange={handleChange}
                        className="w-full p-1 border border-gray-300 outline-none rounded text-black"
                      />
                    ) : field === "selectedFile" ? (
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setFormData({
                            ...formData,
                            selectedFile: base64,
                          })
                        }
                      />
                    ) : (
                      <input
                        type="text"
                        name={field}
                        value={value}
                        onChange={handleChange}
                        className="w-full p-1 border border-gray-300 outline-none rounded text-black"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-2">
          <Button text={formData ? "Update" : "Create"} type="submit"></Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAbout;
