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

export default function Resume() {
  return (
    <div>
        <Typography 
   variant="h4" 
   align="left"
   sx={{padding: '0.5em'}}
   >
     Work History
    </Typography> 
    <Divider/>
    <List sx={{ width: '100%', maxWidth: '100vw', bgcolor: 'background.paper', margin: 'auto' }}>
      {WorkDescription.map((work)=>(
         <ListItem
         sx={{margin: 'auto'}}
         >
         <ListItemAvatar>
           <Avatar>
             <WorkIcon />
           </Avatar>
         </ListItemAvatar>
         <ListItemText primary={work.workplace} secondary={work.timeframe} />
       </ListItem>
      ))}
    </List>
    </div>
  );
}