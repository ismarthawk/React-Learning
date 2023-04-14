import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskBox({ title, task, id, deleteTask }) {
  return (
    <div>
      <Card sx={{ padding: 1 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{task}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => {
              deleteTask(id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TaskBox;
