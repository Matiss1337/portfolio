import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import MyPhoto from "../assets/MyPhoto.png"



const AboutMe = ({}) => {
  return (
    <Stack flexDirection="row"
    sx={{display: 'flex', width: {xs: "80%", sm: "80%", md: "80%", lg: "90%", xl: "80%"},
    flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row", xl: "row"
            }}}>
        <Box>
        <Typography variant="h2" color="#ff5152" fontWeight="bold"
        sx={{p:"45px", pl:"0"}}>About Me</Typography>
        <Typography variant="h5"
        sx={{pr:"80px"}}>My strong skills in React, TypeScript, Responsive Design, and Firebase have allowed me to deliver high-quality results. I have a proven track record of implementing pixel-perfect designs in React applications, leveraging Firebase for secure authentication and efficient data storage, and developing a real-time chat application using React, Node.js, and Express. I am highly dedicated, reliable, and committed to exceeding expectations with every project I work on.
        </Typography>
         
         </Box>
         
         
         <Stack  
        component="img"
        sx={{
          height: {xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "500px"},
          width: {xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "500px"},
          borderRadius: "50%",
          alignSelf: "center",
        }}
        alt="My Photo"
        src={MyPhoto}/>
    </Stack>
  )
}

export default AboutMe

