import { createContext, useEffect, useMemo, useState } from "react";
import { fetchImages } from "../libs/imagesApi";

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  // use state
  const [query, setQuery] = useState("iamge");
  const [numOfpages, setNumOfPages] = useState(1);
  const [images, setImages] = useState(null);
  const [buttonPages, setButtonPages] = useState(5);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // async function init() {
    //   await loadImages();
    // }

    if (!pageLoading) {
      loadImages();
    }

    // setPageLoading(false);

    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, [pageLoading]);

  const loadImages = async () => {
    const data = await fetchImages(query, numOfpages);
    console.log("datos de api", data);
    setImages(data);
  };

  useEffect(() => {
    loadImages();
  }, [numOfpages, query]);

  return (
    <ImagesContext.Provider
      value={{
        images,
        pageLoading,
        query,
        setQuery,
        numOfpages,
        setNumOfPages,
        setButtonPages,
        buttonPages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};
