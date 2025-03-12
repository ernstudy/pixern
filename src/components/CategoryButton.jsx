import React, { useContext } from "react";
import { InputContext } from "../context/InputContext";

export default function CategoryButton({ onSearch }) {
  const { setInputValue } = useContext(InputContext);

  const hundleCategories = (e) => {
    const text = e.target.textContent;
    setInputValue(text);
    onSearch(text);
    saveInputValue(text);
  };

  // Stores the button text in localStorage
  const saveInputValue = (text) => {
    sessionStorage.setItem("item", text);
  };

  // const onSearch = () => {

  // }

  const buttonText = ["dog", "cat", "bird", "nature", "floor"];
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
