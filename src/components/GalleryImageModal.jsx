import { Close, Download } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React from "react";

export default function GalleryImageModal({ imageDetails, activeModal }) {
  // show modal - image gallery

  const StyledDownloadButton = styled(Button)({ backgroundColor: "blue" });

  const StyledCloseButton = styled(Close)({});

  // image data
  const imageData = {
    image: imageDetails?.urls.small,
    id: imageDetails?.id,
    title: imageDetails?.alt_description,
  };

  return (
    <>
      {imageDetails && (
        <div className={activeModal ? "gallery-modal active" : "gallery-modal"}>
          <div className="modal-box">
            <div className="modal-image">
              <img src={imageData.image} alt={imageData.title} />
            </div>
            <div className="modal-image-title">
              <h2>{imageData.title}</h2>
            </div>
            <div className="modal-image-buttons">
              <StyledDownloadButton endIcon={<Download />}>
                Download
              </StyledDownloadButton>

              <StyledCloseButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
