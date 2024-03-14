import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminAbout from "./AdminAbout";
import AdminPortfolio from "./AdminPortfolio";
import AdminBlog from "./AdminBlog";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(0);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("admin"));

    if (!res?.user?.admin) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-auto w-full bg-seconday text-white">
      <div className="flex items-start gap-4 ">
        <div className="w-1/4 bg-lightgray h-screen flex items-start justify-center">
          <AdminSidebar tabs={tabs} setTabs={setTabs} />
        </div>
        <div className="w-full py-4">
          {tabs === 1 ? <AdminAbout /> : ""}{" "}
          {tabs === 2 ? <AdminPortfolio /> : ""}
          {tabs === 3 ? <AdminBlog /> : ""}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
