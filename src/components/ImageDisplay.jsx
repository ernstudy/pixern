import React, { useState } from "react";
import PrevNextNavigator from "./PrevNextNavigator";

export default function ImageDisplay({ imageData }) {
  console.log(imageData);

  // const { image, setImage } = useState({});

  // const getImageItems = () => {
  //   imageData?.forEach((item) => {
  //     console.log(item.urls.full);
  //     const imageItem = {
  //       image: item.urls.full,
  //     };
  //     return imageItem;
  //   });

  //   setImage(imageItem);
  //   console.log(imageItem);
  // };

  // getImageItems();

  return (
    <div className="image-display">
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

      <div className="images-container">
        {imageData &&
          imageData.map((image) => (
            <div className="image" width={image.width} key={image.id}>
              <img src={image.urls.full} alt="" />
            </div>
          ))}
      </div>

      <PrevNextNavigator />
    </div>
  );
}
