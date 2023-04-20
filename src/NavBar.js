import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import BasicList from './MenuList';

export default function ButtonAppBar() {
    const [drawerOpen, setDrawerOpen]=React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static"
      sx={{backgroundColor: '#fae6ff', color: 'grey'}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{
                drawerOpen===true ? setDrawerOpen(false) : setDrawerOpen(true)
            }}
          >
            <Drawer
            anchor="left"
            open={drawerOpen}

            >
               <BasicList/>
            </Drawer>
            <MenuIcon />
          </IconButton>
          <Typography
          sx={{fontFamily: 'Playfair Display'}}
          >
            Savannah Bergen's Personal Site
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}