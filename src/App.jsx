import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Routes>
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
