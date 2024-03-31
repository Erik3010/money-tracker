import { RouterProvider } from "react-router-dom";
import { router } from "@router/index.tsx";
// import supabase from "@lib/supabaseClient";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
