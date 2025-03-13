function CategoryCard({ categoryName = "", desc = "" }) {
  return (
    <div className="flex space-x-6">
      <img
        alt=""
        className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
        src="https://source.unsplash.com/240x320/?portrait?0"
      />
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">{categoryName}</h4>
        <p className="text-sm dark:text-gray-600">{desc}</p>
        <div className="flex mt-2 space-x-2"></div>
      </div>
    </div>
  );
}

export default CategoryCard;
