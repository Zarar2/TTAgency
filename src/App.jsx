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

import TiktokAdCompaigns from "./pages/TiktokAdCompaigns";
import ShopHandlingServices from "./pages/ShopHandlingServices";
import TiktokLive from "./pages/TiktokLive";
import NewProductLaunches from "./pages/NewProductLaunches";
import AccountManagement from "./pages/AccountManagement";
import CrossPlatformStrategies from "./pages/CrossPlatformStrategies";
import Services from "./pages/Services";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
            
            <Route path="tiktokAdCompaigns" element={<TiktokAdCompaigns />} />
            <Route path="shopHandlingServices" element={<ShopHandlingServices />} />
            <Route path="tiktokLive" element={<TiktokLive />}/>
            <Route path="newProductLaunches" element={<NewProductLaunches />} />
            <Route path="accountManagement" element={<AccountManagement />} />
            <Route path="crossPlatformStrategies" element={<CrossPlatformStrategies />} />
            <Route path="termOfServices" element={<Services />} />
            {/* <Route path="boostBundle" element={<BoostBundle />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
