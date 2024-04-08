import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/Admin";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth0();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {loading ? (
        <Loading />
      ) : (
        <>
          {isAuthenticated && <Navbar />}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth-callback" element={<AuthCallbackPage />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {pathname !== "/user-profile" && pathname !== "*" && <Footer />}
          <Toaster position="top-right" reverseOrder={false} />
        </>
      )}
    </div>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
