import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

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

export { StyledNavigateNext, StyledNavigateBefore };
