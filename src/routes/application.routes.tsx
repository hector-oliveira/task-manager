import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import * as S from "@public/index";

export const applicationRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <S.TaskDetails />,
  },
]);
