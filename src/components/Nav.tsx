import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';

export default function ButtonAppBar({setMode, mode}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar >

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MatissTech
          </Typography>
          <Button color="inherit">About me</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
          <Link underline="none" href="https://docs.google.com/document/d/e/2PACX-1vT3pQtRwBbygwJc5NDKfM3WAQmYGbu0rv2dFM7vv4-xYKxKFQ96tinAXw3Gl2Nv0-oeBudxUPnxD2zD/pub" color="inherit"><Button color="inherit">CV</Button></Link>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Switch onChange={e=> setMode(mode === "light" ? "dark" : "light")}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}