import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function BasicList() {

const navigate = useNavigate();

  return (
    <Box sx={{ width: 250 }}>
      <nav aria-label="main navigational pages">
        <List>
        <ListItem disablePadding>
            <ListItemButton
            onClick={()=>{navigate('/')}}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton
            onClick={()=>{navigate('/about-me')}}
            >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton
            onClick={()=>{navigate('/education')}}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            onClick={()=>{navigate('/random-music')}}
            >
              <ListItemIcon>
                <LibraryMusicIcon />
              </ListItemIcon>
              <ListItemText primary="Random Music Fun" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
export default BasicList;