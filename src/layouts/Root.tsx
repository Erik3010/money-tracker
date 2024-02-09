import Navbar from "@components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

interface RootProps {
  children?: React.ReactNode;
  showNavbar?: boolean;
}

const Root = ({ children, showNavbar = true }: RootProps) => {
  return (
    <main className="bg-white max-w-[480px] mx-auto">
      <div className="w-full min-h-screen p-6 pb-24">
        {children ?? <Outlet />}
      </div>
      {showNavbar && <Navbar />}
    </main>
  );
};

export default Root;
