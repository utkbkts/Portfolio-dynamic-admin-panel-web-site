import { useCreateMyUser } from "../api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createMyUserRequest } = useCreateMyUser();
  const hasCreatedUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createMyUserRequest({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createMyUserRequest, navigate, user]);
  return <div>Loading...</div>;
};

export default AuthCallbackPage;
