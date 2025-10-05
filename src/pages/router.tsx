import { Routes, Route } from "react-router-dom";
import HomeLoan from '../pages/HomeLoan/homeLoan';
import Insurance from '../pages/Insurance/insurance';
import Investing from '../pages/Investing/investing';
import Home from "./Home/home";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home-loan" element={<HomeLoan />} />
    <Route path="/insurance" element={<Insurance />} />
    <Route path="/investing" element={<Investing />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default RoutesConfig;