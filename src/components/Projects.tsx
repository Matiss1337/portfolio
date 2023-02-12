import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Cars from "../assets/cars.gif"
import GMTA from "../assets/gmta.gif"
import Chat from "../assets/chat.gif"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {Element } from "react-scroll";




const Projects = () => {
  return (
    <Element name="ProjectsTarget">
    <Stack flexDirection="column" 
    sx={{display: 'flex', width: {xs: "80%", sm: "80%", md: "80%", lg: "90%", xl: "80%"},
    margin:"auto"
    }}
    >
              <Box>
            
        <Typography variant="h2" color="#ff5152" fontWeight="bold"
        sx={{p:"50px", pl:"0", mt:"200px"}}>Recent Projects</Typography>
         </Box>

             <Stack sx={{flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row", xl: "row"
            }}} mb="140px" mt="10px">
                     <Box
        component="img"
        sx={{ bgcolor:"grey",
        padding:"2px",
        borderRadius:"10px",
          mr: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"},
          mt: {xs: "80px", sm: "80px", md: "80px", lg: "0px", xl: "0px"},
          height: {xs: "150px", sm: "200px", md: "400px", lg: "400px", xl: "400px"},
          width: {xs: "300px", sm: "400px", md: "600px", lg: "600px", xl: "600px"},
          alignSelf: "center",
        }}
        alt="Figma to React project"
        src={GMTA}
            />  
            <Box>
            <Typography variant="h3">GMTA</Typography>
            <Typography sx={{pt:"10px", pb:"10px"}} variant="h5">Implemented Figma designs  in a React application with pixel-perfect precision, ensuring a high level of visual accuracy.
            </Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Typescript</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Figma to React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Responsive design</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Pixel perfect</Typography>
            <Button sx={{p:"10px 25px 10px 25px", mt:"20px", bgcolor:"#ff5152", color:"White", ':hover': { bgcolor: '#ff7374',}}} variant="contained" href="https://github.com/Matiss1337/GMTA" 
            color="inherit" target="_blank">Github Link</Button>
            
            </Box>
            
         </Stack>
            <Divider style={{ backgroundColor: '#ff5152', width: '100%', height: '80px'}} />

                  <Stack
                  sx={{flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "row-reverse", lg: "row-reverse", xl: "row-reverse"
            }}}
                 mb="140px" mt="140px">
                     <Box
        component="img"
        sx={{
          bgcolor:"grey",
        padding:"2px",
        borderRadius:"10px",
          mr: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"},
          mt: {xs: "80px", sm: "80px", md: "80px", lg: "0px", xl: "0px"},
          height: {xs: "150px", sm: "200px", md: "400px", lg: "400px", xl: "400px"},
          width: {xs: "300px", sm: "400px", md: "600px", lg: "600px", xl: "600px"},
          alignSelf: "center",
        }}
        alt="The house from the offer."
        src={Cars}
            />  
            <Box>
            <Typography variant="h3">Car dealership</Typography>
            <Typography sx={{pt:"10px", pb:"10px"}} variant="h5">Utilized Firebase for user authentication and data storage, including real-time database, image storage, and email and Google sign-in functionality, added sorting functionality to the app.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Firebase</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Authentication</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Firebase DB</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/> Image Storage</Typography>
            <Button sx={{p:"10px 25px 10px 25px", mt:"20px", bgcolor:"#ff5152", color:"White",':hover': { bgcolor: '#ff7374',}}} variant="contained" href="https://github.com/Matiss1337/React-Firebase-CRUD-Auth-DB-Context-Router" 
            color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>
            <Divider style={{ backgroundColor: '#ff5152', width: '100%', height: '80px'}} />

             <Stack 
             sx={{flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row", xl: "row"
            }}}
             mb="140px" mt="140px">
                     <Box
        component="img"
        sx={{
          bgcolor:"grey",
        padding:"2px",
        borderRadius:"10px",
          mr: {xs: "0", sm: "0", md: "0", lg: "80px", xl: "80px"},
          mt: {xs: "80px", sm: "80px", md: "80px", lg: "0px", xl: "0px"},
          height: {xs: "150px", sm: "200px", md: "400px", lg: "400px", xl: "400px"},
          width: {xs: "300px", sm: "400px", md: "600px", lg: "600px", xl: "600px"},
          alignSelf: "center",
        }}
        alt="The house from the offer."
        src={Chat}
            />  
            <Box>
            <Typography variant="h3">Chat app</Typography>
            <Typography sx={{pt:"10px", pb:"10px"}} variant="h5">Developed a real-time chat application using websockets, React, Node.js, and Express. Implemented message broadcasting, and real-time messaging.</Typography>
            <Typography variant="h4">Tehnologies Used:</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>React</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Typescript</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Material-ui</Typography>
            <Typography variant="h5"><CheckOutlinedIcon/>Responsive design</Typography>
            <Button sx={{p:"10px 25px 10px 25px", mt:"20px", bgcolor:"#ff5152", color:"White",':hover': { bgcolor: '#ff7374',}}} variant="contained" href="https://github.com/Matiss1337/Chat-App" 
             color="inherit" target="_blank">Github Link</Button>
            </Box>
         </Stack>

 
    </Stack>
    </Element>
  )
}

export default Projects
