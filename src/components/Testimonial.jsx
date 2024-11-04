import Slider from "react-slick";
import styles from "./Testimonial.module.css";
import "./Testimonials.css";

const testimonialList = [
  {
    photo:
      "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
    name: " ",
    position: "Electronics",
    from: "UK",
    content:
      "When we were searching for an agency to amplify our brand's voice on social media, we needed a team we could trust implicitly. From day one, they've exceeded every expectation. Their approach to Influencer Marketing brought us the right faces to represent our brand, while their Paid Social campaigns delivered measurable growth. LuxeTech wouldn’t be where we are without them—true digital innovators!",
  },
  {
    photo:
      "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
    name: " ",
    position: "Skincare",
    from: "BD",
    content:
      "In the competitive world of skincare, standing out is a challenge. But this agency didn’t just help us stand out—they positioned us as a leading voice. Their Community Management skills have been game-changing, turning our followers into a loyal community. And Social Video Production? They made magic happen, producing content that was both engaging and perfectly aligned with our brand. It’s no wonder so many prestigious brands trust them!",
  },

  {
    photo:
      "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
    name: " ",
    position: "Fashion",
    from: "BD",
    content:
      "We've worked with agencies before, but this one truly raised the bar. Their expertise in Influencer Marketing helped us secure authentic, stylish collaborations that resonate with our target audience. And their attention to Paid Social campaigns has been a game-changer for our e-commerce sales. For anyone looking to grow their social presence, I couldn’t recommend them enough—they're the real deal.",
  },

  {
    photo:
      "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
    name: " ",
    position: "Health & Wellness",
    from: "BD",
    content:
      "We needed an agency that could handle it all, and we found it here. The Community Management they provide has fostered an active, engaged following around PureFit, something we’d struggled with before. And their Social Video Production has transformed our brand's personality on social media, making it relatable and dynamic. They truly deliver the quality and professionalism expected by the world’s top brands.",
  },
];

const Testimonial = () => {
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
        {testimonialList.map((testimonial, index) => (
          <section
            key={index}
            className="ezy__testimonial19 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]"
          >
            <div className="container px-4 mx-auto relative">
              <div>
                <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
                  <div className="col-span-12 md:col-span-6 md:col-start-2 relative">
                    <div className="flex justify-center items-center h-full">
                      <div>
                        <div
                          className={`${styles["testimonial-card"]} bg-white shadow-xl dark:bg-slate-800 rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24 `}
                        >
                          <p className="mb-6 opacity-80">
                            {`"${testimonial.content}"`}
                          </p>
                          <h5 className="text-[19px] font-medium">
                            -{testimonial.name}
                            {testimonial.position}, {testimonial.from}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-center md:text-start">
                    <div className="flex items-center justify-center h-full">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="lg:w-full rounded-xl -z-[1] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};
export default Testimonial;
