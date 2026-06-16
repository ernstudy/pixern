import CategoryButton from "../ui/CategoryButton";
import SearchBar from "../ui/SearchBar";
import Logo from "./Logo";
import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <div className={styles.cover}>
      <Logo />
      <div className={styles.centerContent}>
        <h1 className={styles.title}>Discover & Download Free Stock Images</h1>

        <SearchBar />

        <CategoryButton />
      </div>
    </div>
  );
}
