import { Close, Download } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React from "react";
import { StyledCloseButton } from "../../utils/styles/StyledCloseButton";

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
        <div className={activeModal ? "gallery-modal active" : "gallery-modal"}>
          <div className="modal-box">
            <div className="image-and-title">
              <div className="modal-image-title">
                <h2>{imageData.title}</h2>
              </div>
              <div className="modal-image">
                <img src={imageData.image} alt={imageData.title} />
              </div>
            </div>
            <div className="modal-image-buttons">
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
        </div>
      )}
    </>
  );
}
