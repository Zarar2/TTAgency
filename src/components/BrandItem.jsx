import styles from "./BrandItem.module.css";

const BrandItem = ({ imageUrl, altText }) => {
  return (
    <li className={styles.brandItem}>
      <img src={imageUrl} alt={altText} />
    </li>
  );
};

export default BrandItem;
