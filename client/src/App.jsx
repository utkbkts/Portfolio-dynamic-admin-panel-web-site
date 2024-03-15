import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/Admin";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
const App = () => {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Admin sayfasında header ve footer'ı gösterme
  if (pathname.startsWith("/admin")) {
    return (
      <div className="h-screen flex flex-col">
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }

  // Diğer sayfalarda header ve footer'ı göster
  return (
    <div className="h-screen flex flex-col">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
