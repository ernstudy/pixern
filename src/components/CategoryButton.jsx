import React, { useContext } from "react";
import { InputContext } from "../context/InputContext";

export default function CategoryButton({ onSearch }) {
  const { setInputValue, setButtonPages, setNumOfPages } =
    useContext(InputContext);

  const hundleCategories = (e) => {
    const text = e.target.textContent;
    setInputValue(text);
    onSearch(text);
    saveInputValue(text);

    // reset button pages to 5 and number of pages to 1
    setButtonPages(5);
    setNumOfPages(1);
  };

  // Stores the button text in localStorage
  const saveInputValue = (text) => {
    sessionStorage.setItem("item", text);
  };

  const buttonText = ["dog", "cat", "bird", "nature", "flower"];
  return (
    <div className="categories">
      {buttonText.map((text, idx) => (
        <button onClick={hundleCategories} key={idx}>
          {text}
        </button>
      ))}
    </div>
  );
}
