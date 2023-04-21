import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import ArtistFound from '../MusicCards/ArtistFound';
import { Divider, Typography } from '@mui/material';

export default function RandomMusic() {
  const theme = useTheme();
  const [token, setToken] = React.useState(null);
  const [artistData, setArtistData] = React.useState('');

  React.useEffect(()=>{
    axios.post('https://accounts.spotify.com/api/token', `grant_type=client_credentials&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`).then((response)=>{

        setToken(response.data.access_token);
    })
    
  },[])
  React.useEffect(()=>{
    if(token!==null){

        axios.get("https://api.spotify.com/v1/artists/0jnsk9HBra6NMjO2oANoPY/related-artists", { headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
  
            setArtistData(response.data.artists);
            console.log(response.data.artists)
        }

        )
    }
  },[token])

 

  return (
    <div 
    // style={{backgroundColor: '#c3f0c8'}}
    >
     <Typography
     variant="h4"
     align= "left"
     sx={{padding: '0.5em'}}
   
     >
        Use of the Spotify Developer API
     </Typography>
     <Divider
     
     />
    <div
    style={{margin: '1em 0 0 0'}}
    >
      <ArtistFound artists={artistData}/>
      </div>
    </div>
  )
}