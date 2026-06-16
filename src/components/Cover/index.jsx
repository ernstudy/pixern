import CategoryButton from "../ui/CategoryButton";
import SearchBar from "../ui/SearchBar";
import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>
        <span className={styles.logo}>PixErn</span>
        <br />
        Discover & Download Free Stock Images
      </h1>

      <SearchBar />

      <CategoryButton />
    </div>
  );
}
