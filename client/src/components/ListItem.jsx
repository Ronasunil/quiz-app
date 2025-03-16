import { Link, useLocation } from "react-router-dom";

function ListItem({ children, to }) {
  const location = useLocation();
  const path = location.pathname;
  console.log(path, to);
  const active = path === to;
  return (
    <li className="flex">
      <Link
        to={to}
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center px-4 -mb-1 border-b-2 ${
          active ? "dark:border-violet-600" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default ListItem;
