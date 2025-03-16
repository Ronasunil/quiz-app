import Button from "../../components/Button";

function Home() {
  return (
    <section className="py-6 flex h-[80vh] dark:bg-gray-100 dark:text-gray-900">
      <div className="container mx-auto flex flex-col justify-center align items-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-none">CodeQuest</h1>
          <p className="text-lg">
            CodeQuest – The Ultimate Quiz App for Software Engineers! 🚀 Sharpen
            your coding skills and test your knowledge with engaging quizzes on
            Next.js, Terraform, Mysql, Linux and more. Compete with peers,
            challenge yourself with real-world coding scenarios, and stay ahead
            in the ever-evolving tech world. Whether you're a beginner or a
            seasoned developer, CodeQuest is your go-to platform for fun and
            learning!"
          </p>
        </div>
        <div className="items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <div className="">
            <input
              type="text"
              placeholder="Your name"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <Button type="homeBtn">Continue</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
