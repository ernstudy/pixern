import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";
import { categories } from "../utils/category.utils";

export default function CategoryButton({ onSearch }) {
  const { setQuery, setButtonPages } = useContext(ImagesContext);

  const hundleCategories = (e) => {
    const category = e.target.textContent;
    setQuery(category);
    onSearch(category);

    // reset button pages to 5 and number of pages to 1
    setButtonPages(5);
  };

  return (
    <div className="categories">
      {categories.map((category, idx) => (
        <button onClick={hundleCategories} key={idx}>
          {category}
        </button>
      ))}
    </div>
  );
}
