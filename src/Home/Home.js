import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StandardImageList from './ImageList';
import { AppBar } from '@mui/material';
import PaperContainer from './PaperContainer';
import Tooltip from '@mui/material/Tooltip';

export default function Home() {
    const theme = useTheme();

    return (
        <div>
            <AppBar position="sticky"
                sx={{ paddingBottom: '2vh', background: 'white' }}
            >
                <Accordion
                    elevation={0}
                // sx={{border: 'none'}}
                    // defaultExpanded={true}
                >
                    {/* HIII!!! Let's make this sticky!!!! */}
                    
                    <AccordionSummary
                        expandIcon={<Tooltip title="Expand/Collapse"><ExpandMoreIcon /></Tooltip>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant="h6"
                            sx={{ color: 'black', margin: 'auto' }}
                        // align='center'
                        >
                            Welcome, Get To Know Me!
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                        sx={{ backgroundColor: '#E6E6FA' }}
                    >
                        <Typography
                        align="left"
                        >
                            Who Am I?
                        </Typography>
                        <Typography
                            variant="body1"
                            align="left"
                            sx={{ fontFamily: "Playfair Display", padding: '2em 4em 0.5em 4em' }}
                        >
                            When it comes to hiring practices, people are often asking "What are their skills? Will they be able to fill our skill gap right away?" These are, of course, important
                            questions to ask. However, I attended a conference where I listened to a speaker talk about how her life changed when she stopped asking people
                            "What do you DO?" and she started asking people "Who are YOU?"
                            <br /> <br />
                            With that being said, I am hoping that this site will give insight into some of the skills that I have as well as a fun glimpse into things about ME!
                            <br /> <br />
                            I am happy to put together this website. It has been fun doing a small, personal project in React.
                            I have a Maltipoo that you see pictured below! She is my work buddy when I am not physically at the office. Sometimes you will hear
                            her bark on calls. She is a friendly pup!
                            <br /> <br />
                            I am passionate about connecting with people, which is one of the reasons that I am drawn to Frontend Software Work as well as Full Stack Web
                            Development Work.
                            <br /> <br />
                            I put together this site to help me showcase some of my React Skills, as well as to present myself in a way that a Resume is not able to provide.
                            With the amount of time that we spend everyday at work, it is important to get to know one another for our interests as people, not just our interests with the work.

                        </Typography>
                        <br />

                    </AccordionDetails>
                </Accordion>
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
                <PaperContainer />
            </div>
        </div>
    )
}