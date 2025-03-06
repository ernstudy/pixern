import React from "react";
import CategoryButton from "./CategoryButton";
export default function Cover() {
  return (
    <div className="cover">
      <div className="cover-box">
        <h1 className="title">
          <span className="logo">PixErn </span>- Download free images
        </h1>
        <div className="search-bar">
          <input type="text" name="" placeholder="Search for free images..." />
        </div>

        <CategoryButton />
      </div>
    </div>
  );
}
