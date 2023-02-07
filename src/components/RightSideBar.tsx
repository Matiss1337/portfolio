import React from 'react'
import {Box, Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';


function Sidebar() {

  return (
    <Box flex={0.3} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" display="flex" alignItems="end" justifyContent="center" height="100%">
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Typography sx={{textOrientation: 'sideways', writingMode: 'vertical-lr'}} variant="h6" color="text.primary">Matissj1337@gmail.com </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowUpwardRoundedIcon />
              </ListItemIcon>
          </ListItem>
            <ListItem>
              <ListItemIcon >
                <ArrowUpwardRoundedIcon fontSize={"large"}/>
              </ListItemIcon>
          </ListItem>
            <ListItem sx={{mb:"30px"}}>
              <ListItemIcon>
                <ArrowUpwardRoundedIcon />
              </ListItemIcon>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
