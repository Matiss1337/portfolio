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
    <Box flex={0.5} pr="25px" sx={{display: {xs: "none", sm: "none", md: "none", lg: "none", xl: "block"}}}>
      <Box position="fixed" display="flex" alignItems="end" justifyContent="center" height="100%">
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <StyledTypography sx={{textOrientation: 'sideways', writingMode: 'vertical-lr'}} variant="h5" color="#ff5152">Matissj1337@gmail.com </StyledTypography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
            <ListItem>
              <StyledListItemIcon>
                <ArrowUpwardRoundedIcon style={{ color: '#ff5152' }} fontSize={"large"}/>
              </StyledListItemIcon>
          </ListItem>
            <ListItem>
              <StyledListItemIcon >
                <ArrowUpwardRoundedIcon style={{ color: '#ff5152' }} fontSize={"medium"}/>
              </StyledListItemIcon>
          </ListItem>
            <ListItem sx={{mb:"130px"}}>
              <StyledListItemIcon>
                <ArrowUpwardRoundedIcon style={{ color: '#ff5152' }} fontSize={"small"}/>
              </StyledListItemIcon>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default RightSidebar
