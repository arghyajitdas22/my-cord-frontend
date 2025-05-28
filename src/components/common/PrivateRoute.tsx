import * as React from "react";
import { useUser } from "../../hooks/useUser";
import { Navigate } from "react-router";

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  children,
}) => {
  const user = useUser((state) => state.user);
  const accessToken = localStorage.getItem("accessToken");
  if (!user || !accessToken) return <Navigate to={"/login"} replace />;
  return children;
};

export default PrivateRoute;
