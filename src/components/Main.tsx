import React from 'react'
import {Box, Stack} from "@mui/material";
import AboutMe from './AboutMe';
import Hi from './Hi';
import Projects from './Projects';
import Form from './Form';




const Main = () => {
  return (
    <Box flex={11} height="100%" >
      <Stack alignItems="center" bgcolor={"background.default"} color={"text.primary"}>
      <Stack alignItems="center" mt="100px" bgcolor={"background.default"} color={"text.primary"}>
        <Hi/>
        <AboutMe/>
        <Projects/>
        <Form/>
      </Stack>
      </Stack>
    </Box>
  )
}

export default Main