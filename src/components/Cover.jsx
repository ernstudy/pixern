import React from "react";
import CategoryButton from "./CategoryButton";
import SearchBar from "./SearchBar";

export default function Cover() {
  return (
    <div className="cover">
      <h1 className="title">
        <span className="logo">PixErn </span>- Download free images
      </h1>

      <SearchBar />

      <CategoryButton />
    </div>
  );
}
