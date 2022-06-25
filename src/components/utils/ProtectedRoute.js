import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  user,
  children,
  redirectPath = "/",
  roleReq = "admin",
}) => {
  if (roleReq === "admin" && user.roleId !== 1) {
    return <Navigate to={redirectPath} replace />;
  }
  if (roleReq === "user" && user.roleId !== 1 && user.roleId !== 2) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
