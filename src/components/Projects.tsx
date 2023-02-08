import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Cars from "../assets/cars.gif"
import GMTA from "../assets/gmta.gif"
import Chat from "../assets/chat.gif"
import Paper from '@mui/material/Paper';

const Projects = () => {
  return (
    <Stack flexDirection="column">
        <Box>
            
        <Typography variant="h2"
        sx={{p:"50px", pl:"0", mt:"200px"}}>Recent Projects</Typography>
         </Box>

             <Stack flexDirection="row" mb="140px" mt="10px">
                     <Box
        component="img"
        sx={{
          height: 500,
          width: 800,
        }}
        alt="Figma to React project"
        src={GMTA}
            />  
            <Box>
            <Typography variant="h3">GMTA</Typography>
            <Typography variant="h5">Implemented Figma designs  in a React application with pixel-perfect precision, ensuring a high level of visual accuracy.
            </Typography>
            <Typography variant="h5">React</Typography>
            <Typography variant="h5">Typescript</Typography>
            <Typography variant="h5">Figma to React</Typography>
            <Typography variant="h5">Responsive design</Typography>
            <Typography variant="h5">Pixel perfect</Typography>
            <Button href="https://github.com/Matiss1337/GMTA" 
            color="inherit" target="_blank">Github Link</Button>
            
            </Box>
            
         </Stack>

                  <Stack flexDirection="row-reverse" mb="140px" mt="10px">
                     <Box
        component="img"
        sx={{
          height: 500,
          width: 800,
        }}
        alt="The house from the offer."
        src={Cars}
            />  
            <Box>
            <Typography variant="h3">Car dealership</Typography>
            <Typography variant="h5">Utilized Firebase for user authentication and data storage, including real-time database, image storage, and email and Google sign-in functionality, added sorting functionality to the app.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5">React</Typography>
            <Typography variant="h5">Firebase</Typography>
            <Typography variant="h5">Authentication</Typography>
            <Typography variant="h5">Firebase DB</Typography>
            <Typography variant="h5">Image Storage</Typography>
            <Button href="https://github.com/Matiss1337/React-Firebase-CRUD-Auth-DB-Context-Router" 
            color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>
<Divider variant="fullWidth"/>
             <Stack flexDirection="row" mb="140px" mt="10px">
                     <Box
        component="img"
        sx={{
          height: 500,
          width: 800,
        }}
        alt="The house from the offer."
        src={Chat}
            />  
            <Box>
            <Typography variant="h3">Chat app</Typography>
            <Typography variant="h5">Developed a real-time chat application using websockets, React, Node.js, and Express. Implemented message broadcasting, and real-time messaging.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5">React</Typography>
            <Typography variant="h5">Typescript</Typography>
            <Typography variant="h5">Material-ui</Typography>
            <Typography variant="h5">Responsive design</Typography>
            <Button href="https://github.com/Matiss1337/Chat-App" 
            color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>

 
    </Stack>
  )
}

export default Projects
