import { useEffect, useState } from "react";

function ResultBlock({ score = 1, totalQuestions = 20, isHighScore = false }) {
  const percentage = (score / totalQuestions) * 100;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div className="max-w-3xl w-full p-6 shadow-lg rounded-xl text-center bg-white dark:bg-gray-50 dark:text-gray-800">
      {isHighScore && <div className="text-4xl">🎉</div>}

      <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
      <p className="text-gray-600 mt-2">Your Results:</p>

      <div className="mt-4">
        <p className="text-xl font-semibold text-blue-600">
          {score} / {totalQuestions} Correct
        </p>

        <div className="relative w-full bg-gray-200 rounded-full h-4 mt-3">
          <div
            className="absolute left-0 top-0 h-4 rounded-full bg-blue-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {Math.round(progress)}% Score
        </p>
      </div>

      {/* Result Summary */}
      <div className="mt-6 flex justify-around text-gray-700">
        <div className="text-lg">
          ✅ <strong>{score}</strong> Correct
        </div>
        <div className="text-lg">
          ❌ <strong>{totalQuestions - score}</strong> Incorrect
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="px-4 py-2 border border-gray-600 rounded-lg text-gray-700 hover:bg-gray-200 transition"
          onClick={() => window.location.reload()}
        >
          🔄 Try Again
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert("Shared!")}
        >
          📤 See Results
        </button>
      </div>
    </div>
  );
}

export default ResultBlock;
