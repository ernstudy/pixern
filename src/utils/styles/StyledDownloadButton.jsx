import { Button, styled } from "@mui/material";

// download button style
const StyledDownloadButton = styled(Button)({
  background: "#ffc524",
  borderRadius: "5px",
  color: "#434347",
  "&:hover": {
    color: "#ffc524",
    background: "#434347",
    transition: "all 0.5s",
  },
});

export { StyledDownloadButton };
