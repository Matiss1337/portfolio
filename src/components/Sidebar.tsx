import React from 'react'
import {Box, styled} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';





const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
`;


function Sidebar() {

  return (
    <Box flex={0.5} pr="25px" sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" display="flex" alignItems="end" justifyContent="center" height="100%">
        <List>
          <ListItem disablePadding sx={{textAlign:"center"}}>
            <ListItemButton 
             href="https://github.com/Matiss1337" 
            color="inherit" target="_blank">
              <StyledListItemIcon>
                <GitHubIcon/>
              </StyledListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton  
            href="https://www.linkedin.com/in/matiss-judins-319235228/" 
            color="inherit" target="_blank">
              <StyledListItemIcon >
                <LinkedInIcon />
              </StyledListItemIcon>
            </ListItemButton>
          </ListItem>

            <ListItem>
              <StyledListItemIcon>
                <ArrowUpwardRoundedIcon fontSize={"large"}/>
              </StyledListItemIcon>
          </ListItem>
            <ListItem>
              <StyledListItemIcon >
                <ArrowUpwardRoundedIcon fontSize={"medium"}/>
              </StyledListItemIcon>
          </ListItem>
            <ListItem sx={{mb:"30px"}}>
              <StyledListItemIcon>
                <ArrowUpwardRoundedIcon fontSize={"small"}/>
              </StyledListItemIcon>
          </ListItem>



        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
