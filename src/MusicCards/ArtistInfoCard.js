
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';


export default function ArtistInfoCard({name, image, url, followers}){
    const theme = useTheme();
    return(
    <Card sx={{ display: 'flex', width: '30vw'}}>
        <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={image}
      alt="Artist image"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <CardContent sx={{ margin: 'auto' }}>
        <Typography component="div" variant="h5" sx={{margin: 'auto'}}>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Followers: {followers}
        </Typography>
      </CardContent>
      <Box sx={{ margin: 'auto'}}>
        <IconButton 
            aria-label="previous"
            href={url}
        >
          <LinkIcon /> 
        </IconButton>
      </Box>
    </Box>
  </Card>)
}