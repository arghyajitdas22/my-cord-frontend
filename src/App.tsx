import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/register");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
