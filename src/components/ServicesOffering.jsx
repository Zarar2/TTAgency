import ServiceTable from "./ServiceTable";
import styles from "./ServiceOffering.module.css";
export default function ServicesOffering() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Individual Service Offerings</h1>
      <ServiceTable />
    </div>
  );
}
