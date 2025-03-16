import QuestionBox from "../../components/QuestionBox";

function Question() {
  return (
    <section className="dark:bg-gray-100 flex justify-center flex-col items-center gap-5 p-24 dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Questions</h2>
        <p className="mt-4 font-medium text-xl mb-8 dark:text-gray-600">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <QuestionBox question="sdf" />
          <QuestionBox question="sdf" />
          <QuestionBox question="sdf" />
          <QuestionBox question="sdf" />
        </div>
      </div>
      <button className="bg-indigo-700 font-semibold text-lg text-white px-5 py-3 rounded-full">
        Next
      </button>
    </section>
  );
}

export default Question;
