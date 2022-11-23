import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Navigation from './Navigation';

import LinkBehavior from '../../components/LinkBehavior';
// Icons
import { ReactComponent as CamaraIcon } from '../../assets/icons/Camara.svg'
import NotificationButton from './NotificationButton';

const drawerWidth = '350px';

const Sidebar = ({ children }) => (
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar sx={{
            backgroundColor: theme => theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <CamaraIcon />
            <NotificationButton />
        </Toolbar>
        <Divider />
        <Navigation />
        <Box>
            {children}
        </Box>
    </Drawer>
)

export default Sidebar;