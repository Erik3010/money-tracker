import { useAuthStore } from "@stores/auth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { user, isLoading } = useAuthStore(({ user, isLoading }) => ({
    user,
    isLoading,
  }));

  if (isLoading) return;

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
