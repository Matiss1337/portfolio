import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const AboutMe = () => {
  return (
    <Stack flexDirection="column">
        <Box>
        <Typography variant="h2"
        sx={{p:"50px", pl:"0"}}>Recent Projects</Typography>
         </Box>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
            <Typography variant="body2" color="text.secondary">
          List of technologies used: React, TypeScript, Material UI, Node.js, Express, MongoDB, Mongoose, Heroku, Netlify
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         
         <Box
        
      />
    </Stack>
  )
}

export default AboutMe
