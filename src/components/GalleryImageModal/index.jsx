import { Close, Download } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React from "react";
import { StyledCloseButton } from "../../utils/styles/StyledCloseButton";
import styles from "./GalleryImageModal.module.css";
import clsx from "clsx";

export default function GalleryImageModal({
  imageDetails,
  activeModal,
  setActiveModal,
  handleDownload,
  downloading,
  isID,
}) {
  // show modal - image gallery

  const StyledDownloadButton = styled(Button)({
    backgroundColor: "#ffc524",
    color: "#161618",
    fontSize: "16px",
    textTransform: "inherit",
    transition: "all 0.5s",

    "&:hover": {
      backgroundColor: "#e9ab00",
    },
  });

  // image data
  const imageData = {
    image: imageDetails?.urls.small,
    id: imageDetails?.id,
    title: imageDetails?.alt_description,
  };

  const closeModal = () => {
    setActiveModal(!activeModal);
    document.body.style = "overflow: auto";
  };
  return (
    <>
      {imageData.image && (
        <div
          className={clsx(styles.galleryModal, {
            [styles.active]: activeModal,
          })}
        >
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <div className={styles.title}>
                <h2>{imageData.title}</h2>
              </div>
              <div className={styles.modalActions}>
                <StyledDownloadButton
                  endIcon={<Download />}
                  onClick={() => handleDownload(imageDetails)}
                  loading={imageData.id == isID && downloading}
                  loadingPosition="start"
                >
                  Download
                </StyledDownloadButton>

                <StyledCloseButton onClick={closeModal} />
              </div>
            </div>
            <div className={styles.modalImage}>
              <img src={imageData.image} alt={imageData.title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
