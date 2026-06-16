import {
  StyledNavigateBefore,
  StyledNavigateNext,
} from "../../../utils/styles/navigationButtonsStyles";
import { useContext, useState } from "react";
import { ImagesContext } from "../../../context/ImagesContext";
import clsx from "clsx";
import styles from "./PrevNextNavigator.module.css";

export default function PrevNextNavigator() {
  const { setNumOfPages, numOfpages, setButtonPages, buttonPages } =
    useContext(ImagesContext);

  const hundlePages = (e) => {
    const num = parseInt(e.target.textContent);
    setNumOfPages(num);

    if (num >= buttonPages) {
      setButtonPages(num + 1);
    }
  };

  // next and preview buttons fuctionality
  const hundleClick = (num) => {
    setNumOfPages(numOfpages + num);

    if (numOfpages >= 5) {
      setButtonPages(buttonPages + 1);
    }
  };

  return (
    <div className={styles.prevNextNavigator}>
      <StyledNavigateBefore
        onClick={() => hundleClick(-1)}
        sx={
          numOfpages == 1 && {
            visibility: "collapse",
          }
        }
      />

      <div className={styles.pages}>
        {Array.from({ length: buttonPages }).map((_, index) => (
          <div
            key={index}
            className={clsx(styles.page, {
              [styles.active]: index + 1 == numOfpages,
            })}
            onClick={(e) => hundlePages(e)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <StyledNavigateNext
        className={styles.styledButton}
        onClick={() => hundleClick(+1)}
      />
    </div>
  );
}
