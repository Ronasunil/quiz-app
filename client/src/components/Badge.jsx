import { GoTrophy } from "react-icons/go";

function Badge({ children }) {
  return (
    <div className="flex gap-2 justify-center items-center">{children}</div>
  );
}

export default Badge;
