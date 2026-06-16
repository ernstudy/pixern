import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoMark}>
        <span className={styles.mark}>◈</span>
      </div>
      <div className={styles.logoText}>
        <span className={styles.brand}>PixErn</span>
      </div>
    </div>
  );
}
