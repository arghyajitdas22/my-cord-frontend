import { Navigate, Route, Routes } from "react-router";
import { useUser } from "./hooks/useUser";
import AuthRegister from "./pages/auth/AuthRegister";
import PublicRoute from "./components/common/PublicRoute";
import AuthLogin from "./pages/auth/AuthLogin";
import PrivateRoute from "./components/common/PrivateRoute";
import { useSocket } from "./hooks/useSocket";
import { useEffect } from "react";
import ChatPage from "./pages/chat/Chat.page";

function App() {
  const user = useUser((state) => state.user);
  const initializeSocket = useSocket((state) => state.initializeSocket);
  const disconnectSocket = useSocket((state) => state.disconnectSocket);

  useEffect(() => {
    if (user) {
      initializeSocket();
    }

    return () => disconnectSocket();
  }, [user, initializeSocket]);

  return (
    <Routes>
      <Route
        path="/"
        element={!user ? <Navigate to={"/login"} /> : <Navigate to={"/chat"} />}
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
            <ChatPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
