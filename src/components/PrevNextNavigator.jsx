import {
  NavigateBefore,
  NavigateNext,
  Preview,
  Tune,
} from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../context/InputContext";

const StyledButton = styled(Button)(`background: #ffc524;
    font-size: 14px;
    text-transform: none;
    color: #161618;
    margin: 10px;
    `);

export default function PrevNextNavigator() {
  const { numOfpages, setNumOfPages } = useContext(InputContext);
  const [pages, setPages] = useState(5);

  const hundleClick = (num) => {
    setNumOfPages(numOfpages + num);
    console.log("number of page", numOfpages);
    setPages(pages + num);
  };

  const hundlePages = (e) => {
    const number = parseInt(e.target.textContent);
    setNumOfPages(number);

    if (number >= pages) {
      setPages(number + 1);
    }

    console.log("pages", pages);
  };

  return (
    <div className="prev_next-navigator">
      <StyledButton
        variant="contained"
        disabled={false}
        endIcon={<NavigateNext />}
        onClick={() => hundleClick(+1)}
      >
        Next
      </StyledButton>
      <div className="pages">
        {Array.from({ length: pages }).map((_, index) => (
          <div
            key={index}
            className={index + 1 == numOfpages ? "page active" : "page"}
            onClick={(e) => hundlePages(e)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <StyledButton
        variant="contained"
        disabled={numOfpages <= 1 && true}
        startIcon={<NavigateBefore />}
        onClick={() => hundleClick(-1)}
      >
        Prev
      </StyledButton>
    </div>
  );
}
