import ArtistInfoCard from "./ArtistInfoCard";
import { CircularProgress } from "@mui/material";
export default function ArtistFound(props){
    if(props.artists!==''){
        const cards = props.artists.map((artist)=>{
            return(
                <ArtistInfoCard 
                name={artist.name} 
                image={artist.images[0].url} 
                url={artist.external_urls.spotify}
                followers={artist.followers.total}
                imageArray={artist.images}
                genres={artist.genres}
                popularity={artist.popularity}
                type={artist.type}
                />
            )
        })
        return(<div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around' }}>
        {cards}
      </div>)

    }else{
        return(
            <CircularProgress
            sx={{width: '25vw', margin: 'auto'}}
            />
        )
    }
}