function Button({ children, type, ...props }) {
  const classTypes = {
    homeBtn:
      "w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50",
    profileSaveBtn:
      "border rounded-md py-1 bg-indigo-500 hover:bg-indigo-600 duration-300 transition-all text-white px-4",
    modalCloseBtn: "absolute top-2 right-4 text-xl",
  };
  return (
    <button className={`${classTypes[type]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
