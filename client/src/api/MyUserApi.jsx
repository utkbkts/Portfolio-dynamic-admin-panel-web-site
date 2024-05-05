import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const createMyUserRequest = async (user) => {
    try {
      setLoading(true);
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`https://api.utkubektasoglu.com/api/user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to create user");
      }
    } catch (error) {
      setError(error.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };
  return { createMyUserRequest, loading, error };
};
