import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/Layout.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
