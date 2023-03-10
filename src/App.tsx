import { useState } from 'react'
import Nav from './components/Nav'
import {Box, createTheme, ThemeProvider} from "@mui/material"; 
import Sidebar from './components/Sidebar'
import { Stack } from '@mui/material';
import Main from './components/Main'
import RightSideBar from './components/RightSideBar'
import Footer from './components/Footer';



function App() {
console.log("Hello, My Name is Matiis, but you can call me Matt, this site was built with React, TS and Materia-ui on VITE base.")

  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode === 'light' ? 'light' : 'dark',
    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Nav setMode={setMode} mode={mode}/>
    <Stack direction="row" spacing={2} justifyContent="space-between" bgcolor={"background.default"} color={"text.primary"}>
    <Sidebar/>
    <Main/>
    <RightSideBar/>
    </Stack >
    <Footer/>
    </Box>
    </ThemeProvider>
  )
}

export default App
