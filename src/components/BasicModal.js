import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "85%",
//   transform: "translate(-50%, -50%)",
//   // width: 400,
//   bgcolor: "background.paper",
//   boxShadow: 24,

// };

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth="sm"
      >
        <Box>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <CloseIcon />
                </IconButton>
              }
              title="ChatFace"
            />
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: "10px",
                }}
              >
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
