import {
  StyledNavigateBefore,
  StyledNavigateNext,
} from "../utils/styles/navigationButtonsStyles";
import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";

export default function PrevNextNavigator() {
  const { setNumOfPages, numOfpages } = useContext(ImagesContext);

  const hundlePages = (e) => {
    const num = parseInt(e.target.textContent);
    setNumOfPages(num);

    if (num >= buttonPages) {
      setButtonPages(number + 1);
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
    <div className="prev_next-navigator">
      <StyledNavigateBefore
        onClick={() => hundleClick(-1)}
        sx={
          numOfpages == 1 && {
            visibility: "collapse",
          }
        }
      />

      <div className="pages">
        {Array.from({ length: buttonPages }).map((_, index) => (
          <div
            key={index}
            className={index + 1 == numOfpages ? "page active" : "page"}
            onClick={(e) => hundlePages(e)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <StyledNavigateNext
        className="styled-button"
        onClick={() => hundleClick(+1)}
      />
    </div>
  );
}
