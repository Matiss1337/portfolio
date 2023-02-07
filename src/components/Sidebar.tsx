import React from 'react'
import {Box} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Sidebar({mode, setMode}) {

  return (
    <Box flex={0.5} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" display="flex" alignItems="center" justifyContent="center" height="100%">
        <List>
          <ListItem >
            <ListItemButton
             href="https://github.com/Matiss1337" 
            color="inherit" target="_blank">
              <ListItemIcon>
                <GitHubIcon/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton  
            href="https://www.linkedin.com/in/matiss-judins-319235228/" 
            color="inherit" target="_blank">
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>



        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
