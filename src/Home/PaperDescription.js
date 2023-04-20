import { Paper, Typography, Divider } from '@mui/material';
import { paper } from './DescriptionConstant';
export default function PaperDescription() {

    console.log(paper)

    return (<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2vh', marginBottom: '2vh', textAlign: 'center' }}>
        {paper.map((description) => (
            <Paper sx={{ width: '20vw', height: 'auto', padding: '2em' }}>
                <Typography variant="h6" align='center' sx={{ fontFamily: 'Playfair Display', textWeight: 'bold' }}>
                    {description.interest}
                </Typography>
                <Divider sx={{ paddingTop: '0.5vh', paddingBottom: '0.5vh' }} />
                <div style={{marginTop: '2em', display: 'block', marginLeft: 'auto',
  marginRight: 'auto'}}>
                <img
                    src={`${description.image}?fit=crop&auto=format`}
                    srcSet={`${description.image}?fit=crop&auto=format&dpr=2 2x`}
                    alt={description.interest}
                    loading="lazy"
                    style={{width: '10vw', height: '10vh', objectFit: 'cover'}}
                />
                </div>
                <Typography variant="body" sx={{ marginTop: '0.5vh' }} >
                    {description.description}
                </Typography>
               
            </Paper>
        ))}
    </div>)
}