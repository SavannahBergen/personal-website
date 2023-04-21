import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { WorkDescription } from './WorkDescriptionConst';
import { Divider, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar } from '@mui/material';
import BackgroundImage from '../static/web-design-2906159.jpg';

export default function Resume() {
    return (
        <div>
             
             <AppBar position="sticky"
            sx={{paddingBottom: '2vh', 
            height:  '30vh',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
        }}
            >
                <div
               
                >
                    <Typography
                variant="h4"
                align="center"
                sx={{ padding: '0.5em', color: 'black' }}
            >
                Work History
            </Typography>
                {/* <Typography
                variant="body"
                align="left"
                sx={{color: 'black', padding: '1em', fontFamily: 'Playfair Display', color: 'white'}}
                >
                I am currently a Full Stack Web Developer for Human-Machine Teaming Applications. I am driven to
                make the most of every opportunity I am given. I am seeking an opportunity where I can continue to
                learn, and where my creativity and perspectives will be celebrated. I am passionate about process
                improvements and helping to drive a culture of inclusion.
                </Typography> */}
                </div>

            </AppBar>

            
          
            <List sx={{ width: '100%', maxWidth: '100vw', bgcolor: 'background.paper', margin: 'auto' }}>
                {WorkDescription.map((work) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <ListItem
                                sx={{ margin: 'auto' }}
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={work.workplace} secondary={work.timeframe} />
                            </ListItem>
                        </AccordionSummary>

                        <AccordionDetails>
                            <List
                            sx = {{
                                listStyleType: 'disc',
                                pl: 2,
                                paddingLeft: '5vw'
                               }}
                            >
                        {work.accomplishments.map((accomplishment)=>(
                            <ListItem
                            sx={{ display: 'list-item',
                        }}
                            ><Typography variant="body2">
                                {accomplishment}
                                </Typography>
                            </ListItem>
                        ))}
                        </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>
        </div>
    );
}