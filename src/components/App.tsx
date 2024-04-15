import { RouterProvider } from "react-router-dom";
import { router } from "@router/index.tsx";
import { useInitializeAuth } from "@hooks/useInitializeAuth";

const App = () => {
  useInitializeAuth();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
