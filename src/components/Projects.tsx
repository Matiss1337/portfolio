import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Cars from "../assets/cars.gif"
import GMTA from "../assets/gmta.gif"
import Chat from "../assets/chat.gif"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const Projects = () => {
  return (
    <Stack flexDirection="column" sx={{ maxWidth: {xs: "40%", sm: "50%", md: "70%", lg: "100%", xl: "100%"}}}>
        <Box>
            
        <Typography variant="h2"
        sx={{p:"50px", pl:"0", mt:"200px"}}>Recent Projects</Typography>
         </Box>

             <Stack sx={{flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"
            }}} mb="140px" mt="10px">
                     <Box
        component="img"
        sx={{
          height: 400,
          width: 600,
          mr: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"}
        }}
        alt="Figma to React project"
        src={GMTA}
            />  
            <Box>
            <Typography variant="h3">GMTA</Typography>
            <Typography variant="h5">Implemented Figma designs  in a React application with pixel-perfect precision, ensuring a high level of visual accuracy.
            </Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Typescript</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Figma to React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Responsive design</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Pixel perfect</Typography>
            <Button href="https://github.com/Matiss1337/GMTA" 
            color="inherit" target="_blank">Github Link</Button>
            
            </Box>
            
         </Stack>
            <Divider style={{ backgroundColor: '#ff5152', width: '100%', height: '80px'}} />

                  <Stack
                  sx={{flexDirection: {xs: "column", sm: "column", md: "row-reverse", lg: "row-reverse", xl: "row-reverse"
            }}}
                 mb="140px" mt="140px">
                     <Box
        component="img"
        sx={{
          height: 400,
          width: 600,
          ml: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"}
        }}
        alt="The house from the offer."
        src={Cars}
            />  
            <Box>
            <Typography variant="h3">Car dealership</Typography>
            <Typography variant="h5">Utilized Firebase for user authentication and data storage, including real-time database, image storage, and email and Google sign-in functionality, added sorting functionality to the app.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Firebase</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Authentication</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Firebase DB</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Image Storage</Typography>
            <Button href="https://github.com/Matiss1337/React-Firebase-CRUD-Auth-DB-Context-Router" 
            color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>
            <Divider style={{ backgroundColor: '#ff5152', width: '100%', height: '80px'}} />

             <Stack 
             sx={{flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"
            }}}
             mb="140px" mt="140px">
                     <Box
        component="img"
        sx={{
          height: 400,
          width: 600,
          mr: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"}
        }}
        alt="The house from the offer."
        src={Chat}
            />  
            <Box>
            <Typography variant="h3">Chat app</Typography>
            <Typography variant="h5">Developed a real-time chat application using websockets, React, Node.js, and Express. Implemented message broadcasting, and real-time messaging.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Typescript</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Material-ui</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Responsive design</Typography>
            <Button href="https://github.com/Matiss1337/Chat-App" 
            color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>

 
    </Stack>
  )
}

export default Projects
