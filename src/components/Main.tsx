import React from 'react'
import {Box, Stack} from "@mui/material";
import AboutMe from './AboutMe';
import Hi from './Hi';
import Projects from './Projects';
import Form from './Form';
import Footer from './Footer';



const Main = () => {
  return (
    <Box flex={11} height="100%">
      <Stack alignItems="center">
      <Stack mt="100px" bgcolor={"white"} width="1200px">
        <Hi/>
        <AboutMe/>
        <Projects/>
        <Form/>
        <Footer/>
        
        
      </Stack>
      </Stack>
    </Box>
  )
}

export default Main