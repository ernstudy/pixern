import React from "react";
import styles from "./FooterComponent.module.css";

export default function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {year}, PixErn | Designed by{" "}
        <a href="https://ernstudy.com">Ernstudy</a>
      </p>
    </footer>
  );
}
