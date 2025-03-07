import React, { useContext } from "react";
import { InputContext } from "../context/InputContext";

export default function SearchBar({ onSearch }) {
  const { inputValue, setInputValue } = useContext(InputContext);

  const hundleInput = () => {
    onSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <box-icon
        name="search-alt-2"
        className="icon"
        onClick={hundleInput}
      ></box-icon>
      <input
        type="text"
        name=""
        placeholder="Search for free images..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key == "Enter") return hundleInput(inputValue);
        }}
      />
    </div>
  );
}
