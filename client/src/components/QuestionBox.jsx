function QuestionBox({ answer, setAnswer, selectedAnswer }) {
  const isSelected = selectedAnswer === answer;

  return (
    <div
      onClick={() => setAnswer(answer)}
      className={`flex p-7 h-[9vh] hover:bg-black/10 ${
        isSelected ? "bg-black/10 border-indigo-500" : ""
      }  hover:border-indigo-500 justify-center items-center px-3 border rounded-lg border-indigo-300`}
    >
      <p className="dark:text-gray-600 text-center font-normal text-2xl ">
        {answer}
      </p>
    </div>
  );
}

export default QuestionBox;
