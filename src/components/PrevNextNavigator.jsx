import {
  NavigateBefore,
  NavigateNext,
  Preview,
  Tune,
} from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(`background: #ffc524;
    font-size: 14px;
    text-transform: none;
    color: #161618;
    margin: 10px;
    `);

export default function PrevNextNavigator() {
  return (
    <div className="prev_next-navigator">
      <StyledButton
        variant="contained"
        disabled={false}
        endIcon={<NavigateNext />}
      >
        Next
      </StyledButton>
      <StyledButton
        variant="contained"
        disabled={true}
        startIcon={<NavigateBefore />}
      >
        Prev
      </StyledButton>
    </div>
  );
}
