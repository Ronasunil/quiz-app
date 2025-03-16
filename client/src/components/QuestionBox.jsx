function QuestionBox({ question }) {
  return (
    <div className="flex h-[50px] justify-center items-center px-3 border rounded-lg border-indigo-300">
      <p className="dark:text-gray-600 font-normal text-xl ">{question}</p>
    </div>
  );
}

export default QuestionBox;
