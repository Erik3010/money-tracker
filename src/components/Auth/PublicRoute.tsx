import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/auth";
import Spinner from "@pages/Spinner";

const PublicRoute = () => {
  const { user, isLoading } = useAuthStore(({ user, isLoading }) => ({
    user,
    isLoading,
  }));

  if (isLoading) return <Spinner />;

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
