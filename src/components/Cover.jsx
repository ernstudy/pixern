import React from "react";
import CategoryButton from "./CategoryButton";
export default function Cover() {
  return (
    <div className="cover">
      <div className="cover-box">
        <h1 className="title">
          <span className="logo">PixErn </span>- Download free images
        </h1>

        <input
          type="text"
          name=""
          className="input-text"
          placeholder="Search for free images..."
        />

        <CategoryButton />
      </div>
    </div>
  );
}
