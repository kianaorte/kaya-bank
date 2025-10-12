import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import "./index.css";
import { router } from "./pages/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
