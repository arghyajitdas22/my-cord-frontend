import { Navigate, Route, Routes } from "react-router";
import { useUser } from "./hooks/useUser";
import AuthRegister from "./pages/auth/AuthRegister";
import PublicRoute from "./components/common/PublicRoute";
import AuthLogin from "./pages/auth/AuthLogin";
import PrivateRoute from "./components/common/PrivateRoute";
import CommonLayout from "./layouts/common/common.layout";

function App() {
  const user = useUser((state) => state.user);
  const accessToken = localStorage.getItem("accessToken");

  return (
    <Routes>
      <Route
        path="/"
        element={
          !user || !accessToken ? (
            <Navigate to={"/login"} />
          ) : (
            <Navigate to={"/chat"} />
          )
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <AuthRegister />
          </PublicRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <AuthLogin />
          </PublicRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <CommonLayout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
