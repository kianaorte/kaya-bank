import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/home";
import HomeLoan from "./HomeLoan/homeLoan";
import Insurance from "./Insurance/insurance";
import Investing from "./Investing/investing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home-loan",
    element: <HomeLoan />,
  },
  {
    path: "/insurance",
    element: <Insurance />,
  },
  {
    path: "/investing",
    element: <Investing />,
  },
]);
