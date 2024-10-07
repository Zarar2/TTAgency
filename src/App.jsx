import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";

import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AffiliatesData from "./pages/AffiliatesData";
import Blogs from "./pages/CaseStudies";
import Home from "./pages/Home";
import BlogsCards from "./components/BlogsCards";
import DetailedBlog from "./components/DetailedBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Landing />}></Route>
            <Route path="blogs" element={<Blogs />}>
              <Route index element={<BlogsCards />} />
              <Route path="blog" element={<DetailedBlog />} />
            </Route>
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="affiliatesData" element={<AffiliatesData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
