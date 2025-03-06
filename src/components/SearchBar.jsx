import React, { useContext } from "react";
import { InputContext } from "../context/InputContext";

export default function SearchBar() {
  const { inputValue, setInputValue } = useContext(InputContext);
  console.log(inputValue);
  return (
    <div className="search-bar">
      <box-icon name="search-alt-2" className="icon"></box-icon>
      <input
        type="text"
        name=""
        placeholder="Search for free images..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}
