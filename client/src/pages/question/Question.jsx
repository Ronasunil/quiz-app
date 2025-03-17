import { useEffect, useState } from "react";
import QuestionBox from "../../components/QuestionBox";
import { quizService } from "../../services/api/quiz";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(30);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const location = useLocation();

  const category = new URLSearchParams(location.search).get("category");
  const correctAnswer =
    questions.length &&
    Object.entries(questions[currentQuestion].correct_answers)
      .filter((arr) => arr[1] === "true")[0][0]
      .replace("_correct", "");

  const handleNextQuestion = function () {
    if (currentQuestion <= 20) {
      setCurrentQuestion((curQus) => curQus + 1);
      setTimer(30);
      setAnswer("");
      console.log(questions[currentQuestion].answers[correctAnswer] === answer);
      setScore((score) =>
        questions[currentQuestion].answers[correctAnswer] === answer
          ? score + 1
          : score
      );
    }
  };

  useEffect(() => {
    if (timer > 0 && questions?.length > 0) {
      const interval = setInterval(() => setTimer((time) => time - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, questions]);

  useEffect(() => {
    const fetchData = async function () {
      const data = await quizService.getQuestionByCategory(category);
      setQuestions(data);
    };

    fetchData();

    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";

      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [category]);

  const isDisabled = answer ? false : true;

  console.log(
    correctAnswer,
    questions[currentQuestion]?.answers[correctAnswer]
  );
  return (
    <section className="dark:bg-gray-100 flex justify-center flex-col items-center gap-5 p-24 dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        {/* Static Question Range */}
        <h3 className="text-lg font-medium text-gray-600 text-center mb-2">
          Question {currentQuestion + 1}/20
        </h3>

        <h2 className="text-2xl font-semibold sm:text-4xl text-center">
          Question
        </h2>

        {/* Static Time Left */}
        <p className="text-red-600 font-semibold text-lg text-center mt-2">
          Time Left: {timer}s
        </p>

        <p className="mt-4 font-medium text-xl mb-8 dark:text-gray-600 text-center">
          {questions.length > 0 ? (
            questions[currentQuestion].question
          ) : (
            <span className="flex justify-center items-end">
              {" "}
              <Loader />
            </span>
          )}
        </p>

        <div className="grid grid-cols-2 gap-6">
          {questions.length > 0
            ? Object.values(questions[currentQuestion].answers).map(
                (ans) =>
                  ans && (
                    <QuestionBox
                      setAnswer={setAnswer}
                      answer={ans}
                      selectedAnswer={answer}
                      key={ans}
                    />
                  )
              )
            : ""}
        </div>
      </div>

      <button
        disabled={isDisabled}
        onClick={handleNextQuestion}
        className={`${
          isDisabled ? "bg-indigo-500" : "bg-indigo-700"
        } font-semibold text-lg text-white px-40 py-4 rounded-full`}
      >
        Next
      </button>
    </section>
  );
}

export default Question;
