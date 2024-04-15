import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/auth";
import Spinner from "@pages/Spinner";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore(({ user, isLoading }) => ({
    user,
    isLoading,
  }));

  if (isLoading) return <Spinner />;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
