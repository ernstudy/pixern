import React, { useContext, useState } from "react";
import PrevNextNavigator from "../ui/PrevNextNavigator";
import { Close, Download } from "@mui/icons-material";
import { Button, colors, styled } from "@mui/material";
import GalleryImageModal from "../GalleryImageModal";
import { StyledDownloadButton } from "../../utils/styles/StyledDownloadButton";
import { envConfig } from "../../config/env.config";
import { ImagesContext } from "../../context/ImagesContext";
import styles from "./ImageDisplay.module.css";

export default function ImageDisplay() {
  const { images } = useContext(ImagesContext);
  // ===== download image  =======
  const [downloading, setDownloading] = useState(false);
  const [isID, setIsID] = useState(null);
  const [activeModal, setActiveModal] = useState(false);
  const [imageDetails, setImageDetails] = useState();

  const handleDownload = async (image) => {
    const accessKey = envConfig.apiKey;
    const photoId = image.id;
    console.log("unique image ID:", photoId);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/${photoId}/download?w=400&q=60`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        },
      );
      // downloading
      setIsID(photoId);
      setDownloading(true);

      if (!response.ok) {
        setDownloading(false);
        throw new Error("error.");
      }

      const downloadData = await response.json();

      // Obtener la imagen desde la URL de descarga
      const imageResponse = await fetch(downloadData.url);
      const blob = await imageResponse.blob();

      // remove loading
      if (blob) {
        setDownloading(false);
      }

      // Crear un enlace temporal para descargar la imagen
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${image.alt_description || "image"}-PixErn.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Liberar la memoria del objeto blob
      URL.revokeObjectURL(link.href);

      // downloading
    } catch (error) {
      console.error("Error:", error.message);
      setDownloading(false);
    }
  };

  // show image modal
  const showModal = (image) => {
    console.log("clicked on this image => :", image);
    setImageDetails(image);
    setActiveModal(true);
    document.body.style = "overflow: hidden;";
  };

  return (
    <div className={styles.imageDisplay}>
      <div className={styles.imagesContainer}>
        {images &&
          images.map((image) => (
            <div className={styles.imageBox} key={image.id}>
              <div
                className={styles.imageWrapper}
                onClick={() => showModal(image)}
              >
                <img src={image.urls.small} alt={image.alt_description} />
              </div>
              <div className={styles.imageInfo}>
                <h2>{image.description || image.alt_description}</h2>
                <StyledDownloadButton
                  loading={isID == image.id && downloading}
                  onClick={() => handleDownload(image)}
                >
                  <Download />
                </StyledDownloadButton>
              </div>
            </div>
          ))}
      </div>

      <GalleryImageModal
        imageDetails={imageDetails}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        handleDownload={handleDownload}
        downloading={downloading}
        setDownloading={setDownloading}
        isID={isID}
      />

      <PrevNextNavigator />
    </div>
  );
}
