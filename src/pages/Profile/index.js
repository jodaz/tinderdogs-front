import * as React from 'react';
import Box from '@mui/material/Box';

const Profile = ({ children }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        height: '100%'
    }}>
        {children}
    </Box>
)

export default Profile
