import { styled } from "@mui/material/styles";
import MUIMaterialButton from "@mui/material/Button";
import { purple, grey } from "@mui/material/colors";

const BaseButton = styled(MUIMaterialButton)((props) => ({
  textTransform: "none",
  borderRadius: "3px",
  width: "100%",
  height: "40px",
  fontFamily: ["Ubuntu", "sans-serif"].join(","),
  cursor: "pointer",
}));

export const PrimaryButton = styled(BaseButton)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],

  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const OutlinedButton = styled(BaseButton)(() => ({
  color: grey[800],
  border: `1px solid ${grey[800]}`,
  textTransform: "none",
}));
