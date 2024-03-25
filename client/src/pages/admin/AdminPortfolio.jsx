import React, { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePostPortfolio,
  DeletePostsPortfolio,
  GetAboutPortfolio,
  UpdatePostsPortfolio,
} from "../../redux/actions/PortfolioActions";

const initialState = {
  category: [],
  image: null,
  link: "",
  title: "",
};
const AdminPortfolio = () => {
  const [formdata, setformdata] = useState(initialState);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.portfolioPost);
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

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    if (value.trim() !== "" && !formdata.category.includes(value)) {
      setformdata((prevData) => ({
        ...prevData,
        category: [...prevData.category, value.trim()],
      }));
    }
  };

  const handleRemoveCategory = (index) => {
    setformdata((prevData) => ({
      ...prevData,
      category: prevData.category.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreatePostPortfolio(formdata));
    setformdata(initialState);
  };

  useEffect(() => {
    dispatch(GetAboutPortfolio());
  }, []);

  const handleDelete = (id) => {
    dispatch(DeletePostsPortfolio(id));
  };

  return (
    <div>
      <div className="">
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
                    ) : field === "category" ? (
                      <>
                        <select
                          value=""
                          onChange={handleCategoryChange}
                          className="w-full p-1 border border-gray-300 outline-none rounded text-black"
                        >
                          <option value="" disabled hidden>
                            Select Category
                          </option>
                          <option value="NextJS">NextJS</option>
                          <option value="React">React</option>
                          <option value="Typescript">Typescript</option>
                          <option value="MongoDB">MongoDB</option>
                          <option value="Firebase">Firebase</option>
                          <option value="Context">Context</option>
                          <option value="ReduxToolkit">Redux Toolkit</option>
                          <option value="NODE.js">NODE.js</option>
                        </select>
                        {formdata.category.map((cat, index) => (
                          <span
                            key={index}
                            className="bg-gray-300 px-2 py-1 ml-2 rounded-full text-sm cursor-pointer"
                            onClick={() => handleRemoveCategory(index)}
                          >
                            {cat} x
                          </span>
                        ))}
                      </>
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
                        placeholder="Title.."
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
          <Button onClick={handleSubmit} text={"Create"} type="submit"></Button>
        </div>
      </div>
      <div className="h-[400px] overflow-y-auto">
        <table className="table-auto w-full border-collapse border border-gray-300  ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 text-black p-2">
                Category
              </th>
              <th className="border border-gray-300 text-black p-2">Title</th>
              <th className="border border-gray-300 text-black p-2">Link</th>
              <th className="border border-gray-300 text-black p-2">Image</th>
              <th className="border border-gray-300 text-black p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts?.map((item) => (
                <tr key={item._id}>
                  <>
                    <td className="border border-gray-300 p-2 text-center">
                      {item?.category && item?.category.join(", ")}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {item?.title}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {item?.link}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <img
                        src={item.image && item?.image.url}
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
                  </>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPortfolio;
