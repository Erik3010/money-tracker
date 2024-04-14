import { RouterProvider } from "react-router-dom";
import { router } from "@router/index.tsx";
import { useSubscribeAuth } from "@hooks/useSubscribeAuth";

const App = () => {
  useSubscribeAuth();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
