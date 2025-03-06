import React from "react";

export default function SugButton() {
  const hundleCategories = (e) => {
    const text = e.target.textContent;
    console.log(text);
  };

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
