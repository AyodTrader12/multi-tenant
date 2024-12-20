import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Home from "../pages/home/home";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
]);
