import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
// import Appbar from "./Appbar";
import "../components/chatbox.css";
import { Box } from "@mui/system";
import { setDialogPosition, chatOpenButton } from "./muiChatboxStyle";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Messages from "./Messages";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, InputBase, Slide, Toolbar } from "@mui/material";
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

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            backgroundColor: "grey",
            "&:hover": {
              backgroundColor: "#dceef4",
              color: "#1b4654",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Chatbox() {
  // const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState("Start Chatting...");
  const [checked, setChecked] = React.useState(false);
  const handleClickOpen = () => {
    // setOpen(true);
    setChecked((prev) => !prev);
  };
  const handleClose = () => {
    setChecked((prev) => !prev);
    // setOpen(false);
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSendMessae = () => {
    setMessages(inputText);
    // setInputText("");
  };
  return (
    <>
      <IconButton onClick={handleClickOpen} sx={chatOpenButton}>
        <AddCommentIcon />
      </IconButton>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Box>
          <Dialog
            disableScrollLock
            hideBackdrop
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={checked}
            transitionDuration={{ enter: 500, exit: 500 }}
            className="DialogWrapper"
            sx={setDialogPosition}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              McChatface
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              sx={{
                height: "550px",
                width: "100%",
                backgroundColor: "#dceef4",
              }}
            >
              <Box>
                <Messages text={"Hello how are you?"} use="me" />
                <Messages
                  text={"Not too bad, just another day at work. How about you?"}
                  user="you"
                />
                <Messages
                  text={
                    "Same here. It's been pretty busy lately, but I can't complain."
                  }
                  use="me"
                />
                <Messages
                  text={
                    " Yeah, I know what you mean. Did you hear about that new restaurant that just opened up downtown?"
                  }
                  user="you"
                />
                <Messages text={"No, I haven't. What's it called?"} use="me" />
                <Messages
                  text={
                    " It's called The Grilled Cheese Co. Apparently they have the best grilled cheese sandwiches in town"
                  }
                  user="you"
                />
                <Messages
                  text={
                    "Oh, that sounds amazing. We should definitely check it out sometime"
                  }
                  use="me"
                />
                <Messages
                  text={
                    "Definitely. Speaking of food, what did you have for lunch today?"
                  }
                  user="you"
                />
                <Messages
                  text={"Just a salad. I'm trying to eat healthier these days."}
                  use="me"
                />
                <Messages
                  text={
                    "That's great. I should probably start doing the same. I've been eating way too much junk food lately."
                  }
                  user="you"
                />
                <Messages
                  text={
                    "It's tough to resist sometimes, but I find that if I plan my meals ahead of time, it's easier to stick to healthy options."
                  }
                  use="me"
                />
                <Messages
                  text={
                    "That's a good idea. I'll have to give it a try. So, what are your plans for the weekend? That's a good idea. I'll have to give it a try. So, what are your plans for the weekend?"
                  }
                  user="you"
                />
                <Typography
                  variant="subtitle"
                  sx={{
                    backgroundColor: "#5d89ba",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  {messages}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <AppBar
                position="static"
                sx={{
                  backgroundColor: "#74bbd3",
                }}
              >
                <Toolbar
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Search fullWidth onChange={(e) => handleChange(e)}>
                    <StyledInputBase
                      placeholder="Start Typing…"
                      inputProps={{
                        "aria-label": "search",
                      }}
                    />
                  </Search>
                  <IconButton
                    color="inherit"
                    onClick={() => handleSendMessae()}
                    sx={{ ml: 2 }}
                  >
                    <SendIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </DialogActions>
          </Dialog>
        </Box>
      </Slide>
    </>
  );
}
