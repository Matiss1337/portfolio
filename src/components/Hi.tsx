import React from 'react'
import {Box, Stack, Typography} from "@mui/material";


const Hi = () => {
  return (
    <Stack sx={{ display: 'flex', maxWidth: {xs: "40%", sm: "50%", md: "70%", lg: "100%", xl: "100%"},
    alignItems: {xs: "center", sm: "center", md: "center", lg: "flex-start", xl: "flex-start"}
    }}>
        <Box pt={14} mb={30}>
            <Typography variant="h4">Hi, My name is</Typography>
            <Typography variant="h1">Matiss Judins.</Typography>
            <Typography variant="h1">Front end developer.</Typography>
        <Typography variant="h4"> I love building beautiful, functionally Excellent Websites.</Typography>
         </Box>
        
    </Stack>
  )
}

export default Hi
