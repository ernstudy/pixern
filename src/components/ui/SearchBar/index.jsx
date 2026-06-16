import { useContext, useState } from "react";
import { Search } from "@mui/icons-material";
import { ImagesContext } from "../../../context/ImagesContext";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { setQuery, setButtonPages, setNumOfPages } = useContext(ImagesContext);
  const [inputQuery, setInputQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (inputQuery.trim()) {
      setQuery(inputQuery);
      setButtonPages(5);
      setNumOfPages(1);
    }
  };

  const handleChange = (value) => {
    setInputQuery(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for free images..."
          className={styles.searchInput}
          onChange={(e) => handleChange(e.target.value)}
          value={inputQuery}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          className={styles.searchButton}
          onClick={handleSubmit}
          aria-label="Search"
        >
          <Search className={styles.searchIcon} />
        </button>
        <div
          className={`${styles.underline} ${isFocused ? styles.active : ""}`}
        />
      </div>
    </div>
  );
}
