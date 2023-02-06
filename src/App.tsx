import { useState } from 'react'
import Nav from './components/Nav'
import {Box, createTheme, ThemeProvider} from "@mui/material"; 


function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
<Nav setMode={setMode} mode={mode}/>
    </Box>
    </ThemeProvider>
  )
}

export default App
