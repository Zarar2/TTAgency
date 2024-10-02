import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import TestinomialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testinomials" element={<TestinomialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
