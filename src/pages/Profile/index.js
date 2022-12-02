import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAuth, logout } from '../../context/AuthContext'
import LinkBehavior from '../../components/LinkBehavior';
import BasicTabs from '../../components/Tabs';
// import RegisterOwner from '../../components/RegisterOwner';

export default function Profile() {
    const { dispatch } = useAuth();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            backgroundColor: '#f6f6f6'
        }}>
            <BasicTabs />
            <Box sx={{
                marginTop: '1rem'
            }}>

            </Box>
            {/* <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => logout(dispatch)}
                component={LinkBehavior}
                to='/'
            >
                Cerrar sesión
            </Button> */}
        </Box>
    );
}
