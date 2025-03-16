import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Quiz() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-scroll custom-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}

export default Quiz;
