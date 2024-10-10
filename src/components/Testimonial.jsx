import { useState } from "react";
import Slider from "react-slick";
import styles from "./Testimonial.module.css";
import "./Testimonials.css";

const testimonialList = [
  {
    photo:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
    name: "John Coates",
    position: "Content Writer",
    from: "UK",
    content:
      '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
  },
  {
    photo:
      "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
    name: "Ellica Perry",
    position: "Project Manager",
    from: "BD",
    content:
      '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { photo, name, position, content, from } = testimonialList[index];

  console.log(testimonialList[0]);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <section className="ezy__testimonial19 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
          <div className="container px-4 mx-auto relative">
            <div>
              <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
                <div className="col-span-12 md:col-span-6 md:col-start-2 relative">
                  <div className="flex justify-center items-center h-full">
                    <div>
                      <div
                        className={`${styles["testimonial-card"]} bg-white shadow-xl dark:bg-slate-800 rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24 `}
                      >
                        <p className="mb-6 opacity-80">{content}</p>
                        <h5 className="text-[19px] font-medium">
                          -{name}, {position}, {from}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 text-center md:text-start">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={photo}
                      alt={name}
                      className="lg:w-full rounded-xl -z-[1] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ezy__testimonial19 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
          <div className="container px-4 mx-auto relative">
            <div>
              <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
                <div className="col-span-12 md:col-span-6 md:col-start-2 relative">
                  <div className="flex justify-center items-center h-full">
                    <div>
                      <div
                        className={`${styles["testimonial-card"]} bg-white shadow-xl dark:bg-slate-800 rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24`}
                      >
                        <p className="mb-6 opacity-80">"{content}"</p>
                        <h5 className="text-[19px] font-medium">
                          -{name}, {position}, {from}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 text-center md:text-start">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={photo}
                      alt={name}
                      className="lg:w-full rounded-xl -z-[1] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ezy__testimonial19 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
          <div className="container px-4 mx-auto relative">
            <div>
              <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
                <div className="col-span-12 md:col-span-6 md:col-start-2 relative">
                  <div className="flex justify-center items-center h-full">
                    <div>
                      <div
                        className={`${styles["testimonial-card"]} bg-white shadow-xl dark:bg-slate-800 rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24`}
                      >
                        <p className="mb-6 opacity-80">{content}</p>
                        <h5 className="text-[19px] font-medium">
                          -{name}, {position}, {from}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 text-center md:text-start">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={photo}
                      alt={name}
                      className="lg:w-full rounded-xl -z-[1] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
};
export default Testimonial;
