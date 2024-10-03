import styles from "./ContactUs.module.css";

export default function ContactCard({
  icon,
  heading,
  description,
  link,
  secondIcon,
  href,
  chat,
}) {
  console.log(href);
  return (
    <div className={styles.contactCard}>
      <img className={styles.icon} src={icon} alt="" />

      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.details}>
        <p className={styles.description}>{description}</p>

        <a target="_blank" href={href} className={styles.link}>
          <span>
            {secondIcon && <img className={styles.phone} src={secondIcon} />}
          </span>
          {link}
        </a>
      </div>
    </div>
  );
}
