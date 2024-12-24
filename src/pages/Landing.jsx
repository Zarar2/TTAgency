import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Partners from "../components/Partners";
import Stats from "../components/Stats";
import SocialShopping from "../components/SocialShopping";
import Testinomial from "../components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropelGrowth from "@/components/PropelGrowth";

export default function Landing() {
  return (
    <>
      <Banner />
      <Brands />
      <SocialShopping />
      <Partners />
      <Stats />
      <WhyChooseUs />
      <PropelGrowth />
      <Testinomial />
    </>
  );
}
