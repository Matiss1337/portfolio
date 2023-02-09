import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import MyPhoto from "../assets/MyPhoto.png"



const AboutMe = () => {
  return (
    <Stack flexDirection="row" 
    sx={{display: 'flex', maxWidth: {xs: "40%", sm: "50%", md: "70%", lg: "100%", xl: "100%"},
    flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"
            }}}>
        <Box>
        <Typography variant="h2"
        sx={{p:"45px", pl:"0"}}>About Me</Typography>
        <Typography variant="h5"
        sx={{pr:"80px"}}>My strong skills in React, TypeScript, Responsive Design, and Firebase have allowed me to deliver high-quality results. I have a proven track record of implementing pixel-perfect designs in React applications, leveraging Firebase for secure authentication and efficient data storage, and developing a real-time chat application using React, Node.js, and Express. I am highly dedicated, reliable, and committed to exceeding expectations with every project I work on.
        </Typography>
         
         </Box>
         
         
         <Box
        component="img"
        sx={{
          height: 500,
          width: 500,
          borderRadius: "50%",
        }}
        alt="The house from the offer."
        src={MyPhoto}
      />
    </Stack>
  )
}

export default AboutMe

