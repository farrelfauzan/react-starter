import { Navigate, RouteObject } from "react-router-dom";
import Home from "./views/home";

const routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
};

export default routes;
