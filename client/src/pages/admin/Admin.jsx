import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { RegisterActions, LoginActions } from "../../redux/actions/AuthActions";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setsignUp] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authFunch = () => {
    dispatch(LoginActions(email, password));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    authFunch();
  };

  useEffect(() => {
    const checkLocalStorage = () => {
      const data = JSON.parse(localStorage.getItem("admin"));
      if (data?.status === "OK") {
        navigate("/admin/dashboard");
      } else {
        setTimeout(checkLocalStorage, 100); // Tekrar denemek için 100 ms bekleyin
      }
    };

    checkLocalStorage();
  }, []);

  return (
    <div className="w-full h-screen bg-seconday flex items-center justify-center">
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center my-20 md:w-1/2 w-full mx-auto gap-4"
        >
          <h1 className="text-4xl font-title">LOGIN</h1>
          <div className="flex flex-col gap-y-2 w-full">
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              placeholder="Email"
            />

            <input
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <Button text={"LOGIN"} type="submit" />
            <div className="flex items-center gap-4">
              <Link to="/">
                <span className="text-sm underline cursor-pointer text-secondary text-white">
                  Home Page
                </span>
              </Link>
              {/* <span className="text-sm underline cursor-pointer text-secondary text-white">
                LOGIN
              </span> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
