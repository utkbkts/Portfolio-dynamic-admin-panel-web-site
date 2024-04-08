import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";

import {
  CreatePostBLOG,
  DeleteBlogPost,
  GetBlogPost,
  UpdatePostsBLOG,
} from "../../redux/actions/BlogActions";
import toast from "react-hot-toast";

const initialState = {
  image: null,
  description: "",
  title: "",
};
const AdminBlog = () => {
  const [formdata, setformdata] = useState(initialState);
  const dispatch = useDispatch();
  const [updateId, setUpdateId] = useState(null);
  const { postsBlog } = useSelector((state) => state.BlogPost);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFileBase(file);
  };
  const setFileBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setformdata((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreatePostBLOG(formdata));
    setformdata(initialState);
  };

  useEffect(() => {
    dispatch(GetBlogPost());
  }, []);

  const handleDelete = (id) => {
    dispatch(DeleteBlogPost(id));
  };

  const handleUpdate = (id) => {
    const post = postsBlog.find((item) => item._id === id);
    if (!post) {
      return;
    }

    setformdata({
      image: post.image,
      description: post.description,
      title: post.title,
    });

    setUpdateId(id);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdatePostsBLOG(formdata, updateId));
    setformdata(initialState);
    setUpdateId(null);
  };

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
              {Object.entries(formdata).map(([field, value]) => (
                <tr key={field}>
                  <td className="border border-gray-300 p-2">{field}</td>
                  <td className="border border-gray-300 p-2 w-2/3">
                    {field === "image" ? (
                      <input
                        type="file"
                        name="image"
                        onChange={handlePhotoChange}
                      />
                    ) : field === "link" ? (
                      <input
                        type="url"
                        name={field}
                        value={value}
                        placeholder="Url Link..."
                        onChange={handleChange}
                        className="w-full p-1 border border-gray-300 outline-none rounded text-black"
                      />
                    ) : (
                      <input
                        type="text"
                        name={field}
                        value={value}
                        placeholder={
                          field === "description"
                            ? "Description..."
                            : "Title..."
                        }
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
          {updateId ? (
            <div className="py-2">
              <Button text="Update" onClick={handleUpdateSubmit}></Button>
            </div>
          ) : (
            <Button text={"Create"} type="submit"></Button>
          )}
        </div>
      </form>
      <div className="h-[400px] overflow-y-auto">
        <table className="table-auto w-full border-collapse border border-gray-300  ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-black p-2">Title</th>
              <th className="border border-gray-300 text-black p-2">
                Description
              </th>
              <th className="border border-gray-300 text-black p-2">Image</th>
              <th className="border border-gray-300 text-black p-2">Actions</th>
              <th className="border border-gray-300 text-black p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {postsBlog &&
              postsBlog?.map((item) => (
                <tr key={item._id}>
                  <>
                    <td className="border border-gray-300 p-2 text-center">
                      {item?.title}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {item?.description}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <img
                        src={item?.image?.url}
                        alt=""
                        className="inline-block"
                        style={{ maxWidth: "80px", maxHeight: "80px" }}
                      />
                    </td>
                    <td
                      onClick={() => handleDelete(item._id)}
                      className="border border-gray-300 p-2 text-center cursor-pointer"
                    >
                      DELETE
                    </td>
                    <td
                      onClick={() => {
                        handleUpdate(item._id);
                        setUpdateId(item._id); // Seçilen blog gönderisinin ID'sini sakla
                      }}
                      className="border border-gray-300 p-2 text-center cursor-pointer"
                    >
                      Update
                    </td>
                  </>
                </tr>
              ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default AdminBlog;
