import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/welcome/welcome";
import Quiz from "./pages/quiz/Quiz";
import Category from "./pages/category/category";
import Profile from "./pages/profile/Profile";
import Results from "./pages/results/Results";
import Modal from "./components/Modal";
import GridWindow from "./components/GridWindow";

function AppRouter() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Quiz />,
      children: [
        {
          path: "categories",
          element: <Category />,
        },
        { path: "profile", element: <Profile /> },
        { path: "home", element: <Home /> },
        { path: "", element: <Navigate to="/home" replace /> },
        { path: "results", element: <Results /> },
      ],
    },
  ]);

  return elements;
}

export { AppRouter };
