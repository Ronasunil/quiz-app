import Icon from "./Icon";
import ListItem from "./ListItem";

function Navbar() {
  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Icon />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <ListItem>Home</ListItem>
            <ListItem>Categories</ListItem>
            <ListItem>Profile</ListItem>
            <ListItem>Leaderboard</ListItem>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <div className="py-2 px-4 border-2 hover:shadow-md hover:shadow-indigo-400 transition-all duration-300  rounded-lg border-indigo-600  ">
            <span className="text-xl font-normal">Rona</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
