import React from 'react'
import {Box, Stack, Typography} from "@mui/material";

const Hi = () => {
  return (
    <Stack flexDirection="row" sx={{ display: 'flex', flexWrap: 'wrap'}}>
        <Box max-width="70%"
        pr={6} pt={14} mb={30}>
            <Typography variant="h4">Hi, My name is</Typography>
            <Typography variant="h1">Matiss Judins.</Typography>
            <Typography variant="h1">Front end developer.</Typography>
        <Typography variant="h4"> I love building beautiful, functionally Excellent Websites.</Typography>
         </Box>
        
    </Stack>
  )
}

export default Hi
