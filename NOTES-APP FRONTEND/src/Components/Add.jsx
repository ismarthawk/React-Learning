import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

function Add({ addTask }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alretText, setAlertText] = useState("");
  // console.log(open);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addNewTask = () => {
    let title = newTitle.trim();
    let text = newText.trim();
    // console.log(title, text);
    if (title === "" || text === "") {
      setAlertText("Failed to add.");
      setAlertOpen(true);
    } else {
      addTask({
        title: title,
        task: text,
      });
      setAlertText("Added.");
      setAlertOpen(true);
    }
    setNewText("");
    setNewTitle("");
    handleClose();
  };
  return (
    <div>
      <Button
        aria-label="add-button"
        sx={{
          position: "fixed",
          right: "10px",
          bottom: "16px",
          borderRadius: 10,
        }}
        size="large"
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
        startIcon={<AddIcon fontSize="large" />}
      >
        Add
      </Button>
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent
          sx={{
            margin: 2,
          }}
        >
          <Stack spacing={4}>
            <TextField
              label="Title"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
              fullWidth
              variant="standard"
            />
            <TextField
              label="Description"
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
              fullWidth
              variant="standard"
              multiline
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setNewTitle("");
              setNewText("");
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button onClick={addNewTask}>Add</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={alertOpen}
        autoHideDuration={2000}
        onClose={() => {
          setAlertOpen(false);
        }}
        message={alretText}
        sx={{ bottom: { xs: 90, sm: 0 } }}
      />
    </div>
  );
}

export default Add;
