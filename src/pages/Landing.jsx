import Banner from "../components/Banner";
import Brands from "../components/Brands";
// import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";

import Stats from "../components/Stats";
import SocialShopping from "../components/SocialShopping";
import Testinomial from "../components/Testimonial";
export default function Landing() {
  return (
    <>
      <Banner />
      <Brands />
      {/* <Testimonial /> */}
      <SocialShopping />
      <Partners />
      <Stats />
      <Testinomial />
    </>
  );
}
