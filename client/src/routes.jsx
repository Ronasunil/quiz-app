import { Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/welcome/welcome";
import Quiz from "./pages/quiz/Quiz";
import Category from "./pages/category/category";
import Profile from "./pages/profile/Profile";
import Results from "./pages/results/Results";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Question from "./pages/question/Question";

const userClient = new ApolloClient({
  uri: "http://localhost:2000/users",
  cache: new InMemoryCache(),
});

const resultClient = new ApolloClient({
  uri: "http://localhost:2000/results",
  cache: new InMemoryCache(),
});

function AppRouter() {
  const elements = useRoutes([
    {
      path: "/quiz/play",
      element: (
        <ApolloProvider client={resultClient}>
          <Question />
        </ApolloProvider>
      ),
    },
    {
      path: "/",
      element: <Quiz />,
      children: [
        {
          path: "categories",
          element: <Category />,
        },
        { path: "profile", element: <Profile /> },
        {
          path: "home",
          element: (
            <ApolloProvider client={userClient}>
              <Home />
            </ApolloProvider>
          ),
        },
        { path: "", element: <Navigate to="/home" replace /> },
        { path: "results", element: <Results /> },
      ],
    },
  ]);

  return elements;
}

export { AppRouter };
