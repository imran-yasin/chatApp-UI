import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function Appbar({ text, setToText }) {
  const [message, setMessage] = React.useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessae = () => {
    alert(message);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#74bbd3",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Search fullWidth onChange={(e) => handleChange(e)}>
            <StyledInputBase
              value={message}
              placeholder="Start Typing…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton color="inherit" onClick={() => handleSendMessae()}>
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
