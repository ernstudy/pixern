import React, { useState } from "react";
import PrevNextNavigator from "./PrevNextNavigator";
import { Close, Download } from "@mui/icons-material";
import { Button, colors, styled } from "@mui/material";
import GalleryImageModal from "./GalleryImageModal";

export default function ImageDisplay({ imageData }) {
  const StyledDownloadButton = styled(Download)({
    background: "#ffc524",
    borderRadius: "5px",
    color: "#434347",
    "&:hover": {
      color: "#ffc524",
      background: "#434347",
      transition: "all 0.5s",
    },
  });

  const handleDownload = async (image) => {
    const accessKey = import.meta.env.VITE_API_KEY;
    const photoId = image.id;
    try {
      // Solicitar la imagen como blob
      const response = await fetch(
        `https://api.unsplash.com/photos/${photoId}/download`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );

      console.log("response", response);

      if (!response.ok) {
        throw new Error("error.");
      }

      const downloadData = await response.json();

      console.log("download", downloadData);

      // Obtener la imagen desde la URL de descarga
      const imageResponse = await fetch(downloadData.url);
      const blob = await imageResponse.blob();

      console.log("blod", blob);

      // Crear un enlace temporal para descargar la imagen
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "imagen_descargada.jpg"; // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Liberar la memoria del objeto blob
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Ocurrió un error:", error.message);
    }
  };

  // show image modal

  const [activeModal, setActiveModal] = useState(false);
  const [imageDetails, setImageDetails] = useState();
  const showModal = (image) => {
    console.log("clicked on this image => :", image);
    setImageDetails(image);
    setActiveModal(true);
  };

  return (
    <div className="image-display">
      {/* <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> */}

      <div className="images-container">
        {imageData &&
          imageData.map((image) => (
            <div
              className="image-box"
              key={image.id}
              onClick={() => showModal(image)}
            >
              <div className="image">
                <img src={image.urls.small} alt={image.alt_description} />
              </div>
              <div className="image-info">
                <h2>{image.description || image.alt_description}</h2>
                <StyledDownloadButton onClick={() => handleDownload(image)} />
              </div>
            </div>
          ))}
      </div>

      <GalleryImageModal
        imageDetails={imageDetails}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      <PrevNextNavigator />
    </div>
  );
}
