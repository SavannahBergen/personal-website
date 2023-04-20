import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';
import StandardImageList from './ImageList';
import { AppBar } from '@mui/material';
import PaperContainer from './PaperContainer';

export default function Home() {
    const theme = useTheme();




    return (
        <div
        // style={{paddingTop: '2vh'}}

        >
            <AppBar position="sticky"
            sx={{paddingBottom: '2vh', background: 'white'}}
            >
                {/* HIII!!! Let's make this sticky!!!! */}
                <Typography
                variant="h6"
                sx={{color: 'black'}}
                >
                    Welcome! I am Savannah Bergen, and I am excited for you to learn more about me.
                </Typography>
            </AppBar>
          
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                <Typography
                    variant="h4"
                    sx={{ textOrientation: 'upright', writingMode: 'vertical-lr', fontFamily: 'Playfair Display' }}
                >
                    Savannah
                </Typography>
                <StandardImageList />
                <Typography
                    variant="h4"
                    sx={{ textOrientation: 'upright', writingMode: 'vertical-lr', fontFamily: 'Playfair Display' }}
                >
                    Bergen
                </Typography>
            </div>
            <div>
            <Typography
                    variant="caption"
                    // sx={{ fontFamily: 'Playfair Display' }}
                >
                    A Few of My Life's Snapshots
                </Typography> 
            </div>
            <div>
                <PaperContainer/>
            </div>
        </div>
    )
}