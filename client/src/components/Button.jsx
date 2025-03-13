function Button({ children, type, ...props }) {
  const classTypes = {
    homeBtn:
      "w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50",
  };
  return (
    <button className={`${classTypes[type]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
