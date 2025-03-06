import React from "react";
import PrevNextNavigator from "./PrevNextNavigator";

export default function ImageDisplay() {
  return (
    <div className="image-display">
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

      <div className="images-container">
        <div className="images"></div>
      </div>

      <PrevNextNavigator />
    </div>
  );
}
