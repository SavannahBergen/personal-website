import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import ArtistFound from '../MusicCards/ArtistFound';
import { Typography } from '@mui/material';

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
        console.log(token)
        axios.get("https://api.spotify.com/v1/artists/0jnsk9HBra6NMjO2oANoPY/related-artists", { headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
            console.log(response);
            setArtistData(response.data.artists);
        }

        )
    }
  },[token])

  let card = "No Data Found";
  React.useEffect(()=>{
    console.log(artistData)

  },[artistData])

  

 
  console.log(card)

  return (
    <div>
     <Typography
     variant="h6"
     >
        This is an example of a call to the Spotify Developer API that returns a collection of Artists.
     </Typography>
    <div>
      <ArtistFound artists={artistData}/>
      </div>
    </div>
  )
}