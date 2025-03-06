import React from "react";
import CategoryButton from "./CategoryButton";
// box icon
import "boxicons";

export default function Cover() {
  return (
    <div className="cover">
      <h1 className="title">
        <span className="logo">PixErn </span>- Download free images
      </h1>
      <div className="search-bar">
        <box-icon name="search-alt-2" className="icon"></box-icon>
        <input type="text" name="" placeholder="Search for free images..." />
      </div>

      <CategoryButton />
    </div>
  );
}
