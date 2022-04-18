import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { selectUser } from './features/loginSlice';
import { ThemeProvider } from "@mui/material/styles";
import {
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

import { darkTheme, lightTheme } from "./theme";
import { toggleTheme } from "../src/features/themeSlice";
function App() {
  const user  =useSelector(selectUser)
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
        <FormGroup>
          <FormControlLabel
            control={
              <IconButton sx={{ ml: 1 }} onClick={dispatch(toggleTheme)} color="inherit">
              {theme.darkTheme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            }
            label="Toggle Theme"
          />
        </FormGroup>
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
