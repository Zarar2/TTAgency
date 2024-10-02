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
        {chat && <p className={styles.chatLink}>Chat now</p>}
        <a href={href} className={styles.link}>
          <span>
            {secondIcon && <img className={styles.phone} src={secondIcon} />}
          </span>
          {link}
        </a>
      </div>
    </div>
  );
}
