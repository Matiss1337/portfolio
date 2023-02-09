import React, {useState} from 'react'
import {Box, Stack, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {

  return (
    <Stack justifyContent="center"  mt="80px" sx={{
    alignSelf: {xs: "flex-start", sm: "center", md: "center", lg: "center", xl: "center"}
    }}>
        <Stack alignItems="center" width="fit-content">
        <Typography variant="h3" textAlign="center" pb="20px"> Contact Me </Typography>
        <form action="https://formsubmit.co/matissj1337@gmail.com" method="POST">
        <Box flexDirection="column" display="flex" width="100%" >
            <Stack sx={{flexDirection: {
              xs: "column", sm: "column", md: "row", lg: "row", xl: "row"
            }}} pb="20px">
              <TextField sx={{width: {xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%"}}}
              required
              id="name"
              label="Your Name"
              name="name"
            /> 
              <TextField sx={{width: {xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%"}}}
              required
              id="phone"
              label="Your Phone number"
              name="phone"
            />
          </Stack>
          <TextField sx={{pb:"20px"}}
            required
            id="email"
            label="Your Email"
            name="email"
            type="email"
          />
          <TextField sx={{pb:"20px"}}
            id="message"
            label="Your Message"
            name="message"
            multiline
            rows={4}
          />
          <Button sx={{bgcolor:"#ff5152"}} variant="contained" endIcon={<SendIcon />} type="submit">
            Send
          </Button>
        </Box>
        </form>
        </Stack>
    </Stack>
  )
}

export default Form
