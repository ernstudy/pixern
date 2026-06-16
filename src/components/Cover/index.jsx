import CategoryButton from "../ui/CategoryButton";
import SearchBar from "../ui/SearchBar";
import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>
        <span className={styles.logo}>PixErn </span>- Search and Download free
        images
      </h1>

      <SearchBar />

      <CategoryButton />
    </div>
  );
}
