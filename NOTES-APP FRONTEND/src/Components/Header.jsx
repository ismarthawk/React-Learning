import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  return (
    <div>
      <AppBar position="fixed" sx={{ padding: 1 }}>
        <Toolbar>
          <IconButton aria-label="">
            <WorkIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} variant="h5">
            My Tasks
          </Typography>

          <Stack>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
