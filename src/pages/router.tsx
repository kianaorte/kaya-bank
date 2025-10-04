import { Route } from "react-router-dom";

import HomeLoan from '../pages/HomeLoan/homeLoan';
import Insurance from '../pages/Insurance/insurance';
import Investing from '../pages/Investing/investing';
import Home from "./Home/Home";

const RoutesConfig = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<HomeLoan />} />
      <Route path="/about" element={<Insurance />} />
      <Route path="/about" element={<Investing />} />
        {/* TODO: make error page
      <Route path="*" element={<NotFound />} /> */}
    </>
  );
}
export default RoutesConfig;