import React from "react";

export default function SugButton() {
  const hundleSug = (e) => {
    const text = e.target.textContent;
    console.log(text);
  };

  const buttonText = ["dog", "cat", "bird", "nature", "floor"];
  return (
    <div className="button-box">
      {buttonText.map((text, idx) => (
        <div
          key={idx}
          role="button"
          onClick={hundleSug}
          aria-label="button"
          tabIndex="0"
          className="sug-button"
          onKeyDown={(e) => {
            if (e.key == "Enter" || "Space") {
              hundleSug();
            }
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
