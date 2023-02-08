import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  return (
    <Stack alignItems="center">
        <Box width="600px">
        <Typography variant="h4" textAlign="center"> Contact Me </Typography>
        <Box flexDirection="column" display="flex" width="600px">
            <Stack flexDirection="row">
                   <TextField sx={{width: "50%"}}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Your name..."
        /> 
                           <TextField sx={{width: "50%"}}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Your Phone number..."
        />
        </Stack>
                                   <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Your Email..."
        />
                <TextField
          id="outlined-multiline-flexible"
          multiline
          defaultValue="Your Message..."
          rows={4}
        />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
        </Box>
        </Box>
    </Stack>
  )
}

export default Form
