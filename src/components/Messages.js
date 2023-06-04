import { Avatar, Box, Typography } from "@mui/material";
// import { Stack } from "@mui/system";
import React from "react";

function Messages({ text, user = "me" }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginBottom: ".2rem",
          justifyContent: user === "me" ? "flex-start" : "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: user === "me" ? "#56aecb" : "#2c778f",
            color: "white",
            padding: ".2rem",
            borderRadius: ".2rem",
          }}
        >
          {" "}
          <Avatar
            sx={{
              mr: 1,
              width: "30px",
              height: "30px",
            }}
          />
          <Typography
            sx={{
              width: "12rem",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Messages;
