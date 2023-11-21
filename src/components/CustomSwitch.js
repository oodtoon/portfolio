import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    onClick={props.toggleBindingType}
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#ff4500",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#FFF",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#FFF" : "#000",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default CustomSwitch