import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";

interface Props {
  element: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<Props> = ({ element, allowedRoles }) => {
  const userRole = useAppSelector(
    (state) => state.usersReducers.currentUser?.role
  );

  if (userRole === "admin") {
    return <>{element}</>;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
