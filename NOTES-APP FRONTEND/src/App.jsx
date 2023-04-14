import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Switch,
  FormControlLabel,
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import Header from "./Components/Header";
import Add from "./Components/Add";
import TaskBox from "./Components/TaskBox";
import { v4 as uuidv4 } from "uuid";
import { Masonry } from "@mui/lab";

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("dark");
  const appTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, { ...task, id: uuidv4() }]);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((item) => item.id != id));
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Header />
      <Add addTask={addTask} />

      <Box
        sx={{
          marginTop: 12,
          marginLeft: 4,
          marginRight: 2,
        }}
      >
        <Masonry
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
          spacing={2}
        >
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <TaskBox
                title={task.title}
                task={task.task}
                id={task.id}
                deleteTask={deleteTask}
                key={task.id}
              />
            ))
          ) : (
            <Paper
              elevation={20}
              sx={{
                padding: 10,
              }}
            >
              <Typography variant="h5" gutterBottom>
                {" "}
                Start Your Day
              </Typography>
              <Typography variant="subtitle1">
                click '+ Add' Button to add new Tasks
              </Typography>
            </Paper>
          )}
        </Masonry>
      </Box>
      {/* <Typography variant="h5" gutterBottom>
        {" "}
        Start Your Day
      </Typography>
      <Typography variant="subtitle1">
        click '+ Add' Button to add new Tasks
      </Typography> */}
    </ThemeProvider>
  );
}

export default App;
