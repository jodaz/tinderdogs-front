import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'

const RecentPostCard = ({
    title,
    image,
    published_at,
    name,
    lastName,
    img_profile
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                border: 'none',
                flexDirection: 'column',
                transition: '0.3s',
                cursor: 'pointer',
                '&: hover': {
                    opacity: 0.75
                }
            }}
        >
            <CardMedia
                component="img"
                width="130"
                height="140"
                alt='blog_post.png'
                src={image}
                sx={{
                    borderRadius: 4,
                }}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                mt: 1
            }}>
                <Box>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={700}
                        sx={{
                            textAlign: { xs: 'center', sm: 'start' },
                            mt: { xs: 1.5, sm: 0 },
                        }}
                    >
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 1}}>
                        <Box sx={{ display: 'flex', justifyContent: 'start', flex: 1 }}>
                            <Box
                                component="img"
                                alt='blog_post.png'
                                src={img_profile}
                                sx={{
                                    maxWidth: 22,
                                    maxHeight: 22,
                                    borderRadius: 1,
                                    mr: 1
                                }}
                            />
                            <Typography
                                component="div"
                                variant="caption"
                                color="text.secondary"
                                fontWeight={500}
                            >
                                {`${name} ${lastName}`}
                            </Typography>
                        </Box>
                        <Typography
                            component="div"
                            variant="caption"
                            color="text.tertiary"
                            fontWeight={500}
                            sx={{ textAlign: { xm: 'center', sm: 'start' }, textTransform: 'capitalize' }}
                        >
                            {format(published_at, 'MMMM d, y', { locale: es })}
                        </Typography>
                    </Box>
                </Box>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        justifyContent: { xs: 'space-between', sm: 'flex-start' },
                        alignItems: 'center'
                    }}
                >
                </Stack>
            </Box>
        </Card>
    );
}

export default RecentPostCard