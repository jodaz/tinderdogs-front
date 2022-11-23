import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles';
import PupiRectangle from '../../assets/images/PupiRectangle.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import LinkBehavior from '../LinkBehavior';
import RegisterDog from '../RegisterDog';

const CallToProfile = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false)

    return (
        <Box sx={{
            height: '88vh',
            width: '88vw',
            padding: '6vh 6vw'
        }}>
            <Box sx={{
                display: 'flex',
                height: 'inherit',
                flexDirection: matches ? 'column-reverse' : 'row',
            }}>
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '400px',
                        minWidth: '300px',
                    }}>
                        <Box sx={{ p: 1 }}>
                            <Typography variant={matches ? 'h6' : 'h4' } align='center' sx={{ fontWeight: '500' }} gutterBottom>
                                ¡Bienvenido a TinderDogs!
                            </Typography>
                            <Typography variant="body1" color="text.secondary" align='center' gutterBottom>
                                Completa tu perfil y el de tu mascota para que puedan aperecer en los resultados.
                            </Typography>
                        </Box>
                        <Box width='250px' alignSelf="center">
                            <Box sx={{ p: 1 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => setOpen(true)}
                                >
                                    Completar perfil
                                </Button>
                            </Box>
                            <Box sx={{ p: 1 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    component={LinkBehavior}
                                    to='/home'
                                    sx={{
                                        backgroundColor: '#ccc',
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: alpha(`#000`, 0.3)
                                        }
                                    }}
                                >
                                    Más tarde
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    flex: 2,
                    position: 'relative',
                    height: '100%',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
                    '&:before': {
                        content: '""',
                        background: `url(${PupiRectangle}) no-repeat center center`,
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        zIndex: 0
                    }
                }} />
            </Box>
            <RegisterDog open={open} handleClose={() => setOpen(false)} />
        </Box>
    );
}

export default CallToProfile;