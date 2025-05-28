import * as React from "react";
import { useUser } from "../../hooks/useUser";
import { Navigate } from "react-router";

interface IPublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FunctionComponent<IPublicRouteProps> = ({
  children,
}) => {
  const user = useUser((state) => state.user);
  const accessToken = localStorage.getItem("accessToken");
  if (user && accessToken) return <Navigate to={"/chat"} replace />;
  return children;
};

export default PublicRoute;
