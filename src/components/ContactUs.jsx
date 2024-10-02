import ContactCard from "./ContactCard";
import bag from "../assets/bag.svg";
import service from "../assets/headphone.svg";
import message from "../assets/message.svg";
import styles from "./ContactUs.module.css";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
const data = [
  {
    icon: bag,
    heading: "Sales & enquiries",
    description:
      "If you have any questions or need assistance, feel free to contact us by email or fill out the form.",
    link: "support@ttinit.com",
    href: "#",
  },

  {
    icon: service,
    heading: "Schedule a Call",
    description:
      "To arrange a call with our team, please select a time slot that best suits you.",
    link: "Schedule Call",
    href: "#",
  },

  {
    icon: message,
    heading: "WhatsApp Live Support",
    description:
      "For immediate assistance, you can reach out to us via WhatsApp.",
    link: "+92 306 6423521",
    secondIcon: phone,
    chat: "Chat Now",
    href: "https://wa.me/+923066423521",
  },
];

export default function ContactUs() {
  return (
    <div>
      <h1 className={styles.mainHeading}>
        Get in touch with <br /> our team today
      </h1>

      <div className={styles.cardContainer}>
        {data.map((card, index) => (
          <ContactCard
            key={index}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
            link={card.link}
            phone={card?.phone}
            chat={card?.chat}
            href={card.href}
            secondIcon={card?.secondIcon}
          />
        ))}
      </div>

      <div className={styles.message}>
        <h1 className={styles.secondaryHeading}>Send us a message</h1>
        <div className={styles.mailing}>
          <img src={mail} alt="" />
          <a href="mailto: support@ttinit.com">support@ttinit.com</a>
        </div>
      </div>
    </div>
  );
}
