import { Close } from "@mui/icons-material";
import { styled } from "@mui/material";

const StyledCloseButton = styled(Close)({
  background: "#7c7c83",
  width: "30px",
  height: "30px",
  padding: "3px",
  fontSize: "20px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "all 0.5s",

  "&:hover": {
    backgroundColor: "#69696f",
  },
});

export { StyledCloseButton };
