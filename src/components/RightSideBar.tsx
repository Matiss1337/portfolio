import React from 'react'
import {Box, Typography, styled} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  letter-spacing: 4px;
`;

function RightSidebar() {

  return (
    <Box flex={0.5} pr="25px" sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed" display="flex" alignItems="end" justifyContent="center" height="100%">
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <StyledTypography sx={{textOrientation: 'sideways', writingMode: 'vertical-lr'}} variant="h6" color="text.primary">Matissj1337@gmail.com </StyledTypography>
              </ListItemIcon>
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

export default RightSidebar
