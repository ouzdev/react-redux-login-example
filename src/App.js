import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { selectUser } from './features/loginSlice';
import { ThemeProvider } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

import { darkTheme, lightTheme } from "./theme";
import { toggleTheme } from "../src/features/themeSlice";
function App() {
  const user = useSelector(selectUser)
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
          <Typography component="overline">
          {theme.darkTheme === false ? 'Light':'Dark'} Mode
          </Typography>
        <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
          {theme.darkTheme === false ? <Brightness4Icon />:<Brightness7Icon />}
        </IconButton>

        </div>
      );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>

      <ToggleSwitch />

      {user ? <Logout /> : <Login />}
    </ThemeProvider>

  );
}

export default App;
