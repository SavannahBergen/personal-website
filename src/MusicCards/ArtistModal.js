import { Modal, Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function ArtistModal(
    { modalValue, setModalValue, imageArray, name, followers, genres, popularity, type }
) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '33vw',
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '1%',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    };

    return (
        <div>
            <Modal
                open={modalValue}
                onClose={() => {
                    setModalValue(false)
                }}
                // elevation={1}
            >
                <Box sx={style}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={imageArray[0].url}
                        alt="Artist image"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '1em' }}>
                        <Typography component="div" variant="h5" sx={{ margin: 'auto' }}>
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Followers: {followers}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Popularity: {popularity}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Type: {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {/*TODO: Add function to capitalize both words of the genre*/}
                            Genres: {genres.map((genre, index) => {
                                if (index !== genres.length - 1) {
                                    return genre.charAt(0).toUpperCase() + genre.slice(1) + ", "
                                }
                                return genre.charAt(0).toUpperCase() + genre.slice(1)
                            })}
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}