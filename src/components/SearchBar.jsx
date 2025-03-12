import React, { useContext, useState } from "react";
import { InputContext } from "../context/InputContext";

export default function SearchBar({ onSearch }) {
  const { inputValue, setInputValue, setNumOfPages, setButtonPages } =
    useContext(InputContext);
  const [text, setText] = useState("");
  // set text to onSearch & store it to setInputValue
  const handleSubmit = () => {
    onSearch(text);
    saveInputValue();

    // reset button pages to 5 and number of pages to 1
    setButtonPages(5);
    setNumOfPages(1);
  };

  // store  the user's entered text in state setText()
  const handleChange = (value) => {
    console.log("handleChange value:", value);
    setInputValue(value);
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
