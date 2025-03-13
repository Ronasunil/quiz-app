import Navbar from "../../components/Navbar";
import Category from "../category/category";
import Profile from "../profile/Profile";

function Quiz() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-scroll custom-scrollbar">
        {/* <Category /> */}
        <Profile />
      </div>
    </div>
  );
}

export default Quiz;
