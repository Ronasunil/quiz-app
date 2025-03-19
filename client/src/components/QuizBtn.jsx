import { ApolloConsumer } from "@apollo/client";
function QuizBtn({
  isDisabled,
  handleNextQuestion,
  currentQuestion,
  handleResult,
}) {
  return currentQuestion >= 20 ? (
    <ApolloConsumer>
      {(resultClient) => (
        <ApolloConsumer>
          {(userClient) => (
            <button
              disabled={isDisabled}
              onClick={() => handleResult(resultClient, userClient)}
              className={`${
                isDisabled ? "bg-indigo-500" : "bg-indigo-700"
              } font-semibold text-lg text-white px-40 py-4 rounded-full`}
            >
              See result
            </button>
          )}
        </ApolloConsumer>
      )}
    </ApolloConsumer>
  ) : (
    <button
      disabled={isDisabled}
      onClick={handleNextQuestion}
      className={`${
        isDisabled ? "bg-indigo-500" : "bg-indigo-700"
      } font-semibold text-lg text-white px-40 py-4 rounded-full`}
    >
      Next
    </button>
  );
}

export default QuizBtn;
