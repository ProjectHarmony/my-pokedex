import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import React from 'react'





const Header = () => {
  return (
    <AppBar position="static" >
      <CssBaseline />
      <Toolbar>
        <Typography variant="overline">
          Pokemon
        </Typography>

      </Toolbar>
    </AppBar>
  )
}

export default Header