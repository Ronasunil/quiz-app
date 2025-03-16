// import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import ListItem from "./ListItem";
import UserAvatar from "./UserAvatar";

function Navbar() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Icon />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <ListItem to="/home">Home</ListItem>
            <ListItem to="/categories">Categories</ListItem>
            <ListItem to="/profile">Profile</ListItem>
            <ListItem to="/results">Results</ListItem>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
