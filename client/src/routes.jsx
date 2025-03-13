import { useRoutes } from "react-router-dom";
import Home from "./pages/welcome/welcome";
import Quiz from "./pages/quiz/quiz";

function AppRouter() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "quiz",
      element: <Quiz />,
    },
  ]);

  return elements;
}

export { AppRouter };
