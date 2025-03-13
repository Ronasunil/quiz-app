function ListItem({ children, active }) {
  return (
    <li className="flex">
      <a
        rel="noopener noreferrer"
        href="#"
        className={`flex items-center px-4 -mb-1 border-b-2 ${
          active ? "dark:border-violet-600" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
}

export default ListItem;
