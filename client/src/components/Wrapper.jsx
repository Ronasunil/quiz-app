import React from "react";

function Wrapper({ children, sectionHeading, sectionDescription }) {
  console.log(React.Children.count(children));
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-4 mx-auto space-y-16 sm:p-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-none sm:text-5xl">
            {sectionHeading}
          </h3>
          <p className="max-w-2xl dark:text-gray-600">{sectionDescription}</p>
        </div>
        <div
          className={`w-full grid gap-6 ${
            React.Children.count(children) === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export default Wrapper;
