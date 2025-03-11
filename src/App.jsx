import React, { useContext, useEffect, useState } from "react";

// css
import "./App.css";

// components
import Cover from "./components/Cover";
import ImageDisplay from "./components/ImageDisplay";
import CopyRigthComponent from "./components/CopyRigthComponent";
import { InputContext } from "./context/InputContext";

export default function App() {
  const per_page = 10;
  const [imageData, setImageData] = useState(null);
  const { numOfpages } = useContext(InputContext);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    searchImage();
  }, [numOfpages]);

  useEffect(() => {
    searchImage();
  }, []);

  const searchImage = async (inputText = "random") => {
    console.log(API_KEY);
    console.log(API_URL);

    try {
      const data = await fetch(
        `${API_URL}?query=${inputText}&page=${numOfpages}&per_page=${per_page}&client_id=${API_KEY}`
      );
      if (!data.ok)
        throw new Error(`Error: ${data.status} - ${data.statusText}`);

      const response = await data.json();
      console.log(response.results);
      setImageData(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Cover onSearch={searchImage} />
      <ImageDisplay imageData={imageData} />

      <CopyRigthComponent />
    </>
  );
}
