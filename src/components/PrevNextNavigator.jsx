import {
  NavigateBefore,
  NavigateNext,
  Preview,
  Tune,
} from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../context/InputContext";

export default function PrevNextNavigator() {
  const { numOfpages, setNumOfPages, buttonPages, setButtonPages } =
    useContext(InputContext);

  const StyledButton = styled(Button)(`background: #ffc524;
    text-transform: none;
    color: #161618;
    margin: 10px;
    padding: 0;
    width: max-content;
    `);
  // Define the base style for the buttons
  const ButtonStyle = {
    fontSize: "30px",
    color: "#161618",
    backgroundColor: "#ffc524",
    padding: "0",
    width: "30px",
    height: "25px",
    margin: "0 16px",
    cursor: "pointer",
    fontWeight: "bolder",
  };

  // Apply ButtonStyle to multiple components
  const StyledNavigateNext = styled(NavigateNext)(ButtonStyle);

  const StyledNavigateBefore = styled(NavigateBefore)(ButtonStyle);

  // next and preview buttons fuctionality
  const hundleClick = (num) => {
    setNumOfPages(numOfpages + num);
    console.log("number of page", numOfpages);

    if (numOfpages >= 5) {
      setButtonPages(buttonPages + 1);
    }
  };

  const hundlePages = (e) => {
    const number = parseInt(e.target.textContent);
    setNumOfPages(number);

    if (number >= buttonPages) {
      setButtonPages(number + 1);
    }

    console.log("pages", buttonPages);
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
