import { useNavigate } from "react-router-dom";

function CategoryCard({
  categoryName,
  img = "https://source.unsplash.com/240x320/?portrait?0",
}) {
  const navigate = useNavigate();

  const redirectToQuestionsPage = function () {
    navigate(`/quiz/play?category=${categoryName}`);
  };
  return (
    <div
      onClick={redirectToQuestionsPage}
      className="flex flex-col  h-80 space-x-6 cursor-pointer"
    >
      <h4 className="text-xl text-center font-semibold">{categoryName}</h4>
      <img
        alt=""
        className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
        src={img}
      />
    </div>
  );
}

export default CategoryCard;
