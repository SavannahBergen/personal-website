import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {educationDescription} from './EducationDescription';

export default function EducationCard() {

  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5vh'}}>
    {educationDescription.map((edu)=>(
        <Card sx={{ maxWidth: '30vw', height: 'auto' }}>
            <div 
            style={{width: 164, height: 164, margin: 'auto'}}
            >
                <img
                src={edu.image}
                style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto', display: 'block'}}
                />
            </div>
        {/* <div style={{width: 164, height: 164}}>
        <img
        sx={{maxWidth: '100%', maxHeight: '100%', margin: 'auto'}}
        //   sx={{ height: 'auto', objectFit: "contain" }}
          src={`${edu.image}`}
          title={edu.school}

        />
        </div> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {edu.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {edu.school}
            <br/>
            Graduated: {edu.graduationYear}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" href={edu.link}>Learn More</Button>
        </CardActions>
      </Card>
    ))}
    </div>
  );
}