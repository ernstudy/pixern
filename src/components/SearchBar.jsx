import { useContext, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";

export default function SearchBar() {
  const { setQuery, setButtonPages } = useContext(ImagesContext);
  const [inputQuery, setInputQuery] = useState("");

  // set text to onSearch & store it to setInputValue
  const handleSubmit = () => {
    setQuery(inputQuery);
    // reset button pages to 5
    setButtonPages(5);
  };

  // store  the user's entered text in state setText()
  const handleChange = (value) => {
    setInputQuery(value);
  };

  return (
    <div className="search-bar">
      <box-icon
        name="search-alt-2"
        className="icon"
        onClick={handleSubmit}
      ></box-icon>
      <input
        type="text"
        name=""
        placeholder="Search for free images..."
        onChange={(e) => handleChange(e.target.value.trim())}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleSubmit();
          }
        }}
      />
    </div>
  );
}
