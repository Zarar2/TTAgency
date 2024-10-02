import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";

import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AffiliatesData from "./pages/AffiliatesData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/affiliatesData" element={<AffiliatesData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
