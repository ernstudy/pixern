import React, { useContext, useState } from "react";
import { InputContext } from "../context/InputContext";

export default function SearchBar({ onSearch }) {
  const { inputValue, setInputValue } = useContext(InputContext);
  const [text, setText] = useState("");

  // set text to onSearch & store it to setInputValue
  const handleSubmit = () => {
    onSearch(inputValue);
    setInputValue(text);
    saveInputValue();
  };

  // store  the user's entered text in state setText()
  const handleChange = (value) => {
    console.log("handleChange value:", value);
    setText(value);
  };

  // Stores the user's entered text in localStorage
  const saveInputValue = () => {
    sessionStorage.setItem("item", text);
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
        value={text}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleSubmit();
          }
        }}
      />
    </div>
  );
}
