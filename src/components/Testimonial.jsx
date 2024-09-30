import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import styles from "./Testimonial.module.css";
import jhon from "../assets/testimonials/John+Roman+BattlBox.jpg";
import Nick from "../assets/testimonials/Nick+Lamothe-100.jpg";
import Ed from "../assets/testimonials/Ed+Mileto-100.jpg";
import Collin from "../assets/testimonials/Colin+Dougherty.jpg";

export default function Testimonial() {
  return (
    <div className={styles.container}>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className={styles.testimonials}>
              <div className={styles.profiles}>
                <img src={jhon} alt="" />
              </div>
              <h2 className={styles.heading}>
                Up Growth always has their pulse on bleeding-edge marketing
                tactics and they are always willing to share openly!
              </h2>
              <p>John Roman - Battlbox</p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className={styles.testimonials}>
              <div className={styles.profiles}>
                <img src={Nick} alt="" />
              </div>
              <h2 className={styles.heading}>
                UpGrowth brings the perfect balance of optimization and
                innovation; knowing how to profitably and incrementally improve
                the basic tried-and-true channels and tactics, while leaning in
                to, and being an early adopter /tester of emerging trends and
                out-of-the-box thinking
              </h2>
              <p>Nick Lamothe</p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className={styles.testimonials}>
              <div className={styles.profiles}>
                <img src={Collin} alt="" />
              </div>
              <h2 className={styles.heading}>
                “Our Results TRIPLED overnight after implementing their tactics.
                These guys are no joke at upGrowth Commerce!”
              </h2>
              <p>- Colin Dougherty - Founder of Camskns</p>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className={styles.testimonials}>
              <div className={styles.profiles}>
                <img src={Ed} alt="" />
              </div>
              <h2 className={styles.heading}>
                "upGrowth has been an incredible resource in helping scale my
                brand. He also always has his finger on the pulse of the ecomm
                world"
              </h2>
              <p>Ed Mileto NBT clothing</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
