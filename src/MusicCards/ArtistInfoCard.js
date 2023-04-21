
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { Button, Tooltip } from '@mui/material';
import ArtistModal from './ArtistModal';


export default function ArtistInfoCard({ name, image, url, followers, imageArray, genres, popularity, type }) {
  const theme = useTheme();
  const [modalState, setModalState] = React.useState(false);

  return (
    <Card sx={{ display: 'flex', width: '30vw', margin: '0 0 1em 0' }}>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Artist image"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
        <CardContent sx={{ margin: 'auto' }}>
          <ArtistModal
            modalValue={modalState}
            setModalValue={setModalState}
            imageArray={imageArray}
            name={name}
            followers={followers}
            genres={genres}
            popularity={popularity}
            type={type}
          />
          <Tooltip title={`Click for More on ${name}`}>

            <Button
              sx={{ color: 'black', textTransform: 'none' }}
              onClick={() => {
                setModalState(true)
              }}
            // onClick={setModalState(true)}
            >
              <Typography component="div" variant="h5" sx={{ margin: 'auto' }}>
                {name}
              </Typography>

            </Button>
          </Tooltip>
        </CardContent>
        <Box sx={{ margin: 'auto' }}>
          <Tooltip
            title={"Open Artist Page in Spotify"}
          >
            <IconButton
              aria-label="previous"
              href={url}
            >
              <LinkIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>)
}