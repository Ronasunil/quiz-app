import { useContext, useEffect, useState } from "react";
import QuestionBox from "../../components/QuestionBox";
import { quizService } from "../../services/api/quiz";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import QuizBtn from "../../components/QuizBtn";
import ResultBlock from "../../components/ResultBlock";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/AuthContext";
import useLocalStorage from "use-local-storage";
import { ADD_HIGH_SCORE, ADD_RESULT, UPDATE_CURRENT_SCORE } from "./queries";
import { resultClient, userClient } from "../../routes";

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(18);
  const [timer, setTimer] = useState(30);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [_user, setUser] = useLocalStorage("user", "");
  const { state, dispatch } = useContext(AuthContext);

  const location = useLocation();

  let isHighScore = score > state.user.highScore ? true : false;
  console.log(isHighScore);

  const [addResult] = useMutation(ADD_RESULT, { client: resultClient });
  const [updateCurrentScore] = useMutation(UPDATE_CURRENT_SCORE, {
    client: userClient,
  });
  const [updateHighScore] = useMutation(ADD_HIGH_SCORE, {
    client: userClient,
  });

  const category = new URLSearchParams(location.search).get("category");

  const handleResult = async function () {
    setScore((score) =>
      questions[currentQuestion].answers[correctAnswer] === answer
        ? score + 1
        : score
    );
    setAnswer("");
    // render result
    setShowResult(true);

    // result to result db
    console.log(state);
    await addResult({
      variables: {
        userId: state.user._id,
        score,
        isHighScore,
        totalQuestion: questions.length,
      },
    });

    if (isHighScore)
      await updateHighScore({ variables: { id: state.user._id, score } });

    const { data } = await updateCurrentScore({
      variables: { id: state.user._id, score },
    });

    const serlizedUser = JSON.stringify(data.updateCurrentScore);

    setUser(serlizedUser);
    dispatch({ type: "ADD_USER", payload: data.updateCurrentScore });
  };

  const correctAnswer =
    questions.length &&
    Object.entries(questions[currentQuestion].correct_answers)
      .filter((arr) => arr[1] === "true")[0][0]
      .replace("_correct", "");

  console.log(correctAnswer);

  const handleNextQuestion = function () {
    if (currentQuestion <= 20) {
      setCurrentQuestion((curQus) => curQus + 1);
      setTimer(30);
      setAnswer("");

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
    } else if (timer === 0 && currentQuestion + 1 !== 20) {
      handleNextQuestion();
      clearInterval();
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

  return showResult ? (
    <ResultBlock score={score} totalQuestions={questions.length} />
  ) : (
    <section className="dark:bg-gray-100 flex justify-center flex-col items-center gap-5 p-24 dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h3 className="text-lg font-medium text-gray-600 text-center mb-2">
          Question {currentQuestion + 1}/20
        </h3>

        <h2 className="text-2xl font-semibold sm:text-4xl text-center">
          Question
        </h2>

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

      <QuizBtn
        disabled={isDisabled}
        handleNextQuestion={handleNextQuestion}
        currentQuestion={currentQuestion + 1}
        handleResult={handleResult}
        className={`${
          isDisabled ? "bg-indigo-500" : "bg-indigo-700"
        } font-semibold text-lg text-white px-40 py-4 rounded-full`}
      >
        Next
      </QuizBtn>
    </section>
  );
}

export default Question;
