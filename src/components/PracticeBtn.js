import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

const PracticeBtn = (props) => {
  const theme = useTheme();
  const btnMsg = props.isPractice ? "Exit Practice" : "Practice";

  const primaryColor = theme.palette.mode === "dark" ? "#000" : "#FFF";
  const secondaryColor = theme.palette.mode === "dark" ? "#FFF" : "#000";

  const btnTheme = {
    color: primaryColor,
    backgroundColor: secondaryColor,
    fontWeight: "800",
    "&:hover": {
      backgroundColor: "#ff4500",
    },
    marginLeft: "auto",
  };

  return (
    <>
      <Button sx={{ ...btnTheme }} onClick={props.toggle}>
        {btnMsg}
      </Button>
    </>
  );
};

export default PracticeBtn