import React from 'react'
import {Box, Stack} from "@mui/material";
import AboutMe from './AboutMe';
import Hi from './Hi';
import Projects from './Projects';



const Main = () => {
  return (
    <Box flex={11} height="100vh">
      <Stack alignItems="center">
      <Stack mt="100px" bgcolor={"white"} width="1200px">
        <Hi/>
        <AboutMe/>
        <Projects/>
        
        
      </Stack>
      </Stack>
    </Box>
  )
}

export default Main