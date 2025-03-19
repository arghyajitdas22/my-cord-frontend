import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useUser } from "./hooks/useUser";
import { refreshUserToken } from "./services/auth.service";

function App() {
  const navigate = useNavigate();
  const user = useUser((state) => state.user);
  const refreshUser = async () => {
    if (!user) navigate("/login");
    else {
      try {
        await refreshUserToken();
      } catch (error) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    refreshUser();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
