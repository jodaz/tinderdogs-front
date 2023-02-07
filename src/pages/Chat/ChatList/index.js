import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import SearchBox from '../../../components/SearchBox';
import UserMessageCard from './UserMessageCard';

const messagesArray = [
    {
        id: 1,
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        created_at: new Date(),
        User: {
            name: 'Eminem',
            user_picture: '/images/samples/Pupi.png'
        },
        connected: true
    },
    {
        id: 2,
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        created_at: new Date( Date.now() - 1000 * 60 ), // 45 min
        User: {
            name: 'J',
            lastName: 'Balvin',
            user_picture: '/images/samples/Pupi.png'
        },
        connected: false
    },
    {
        id: 3,
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        created_at: new Date(2023, 1, 4, 10, 33, 1), // Unos dias
        User: {
            name: 'Kygo',
            user_picture: '/images/samples/Pupi.png'
        },
        connected: true
    },
    {
        id: 4,
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        created_at: new Date(2023, 0, 28, 10, 33, 1), // Unos dias
        User: {
            name: 'Deadmau5',
            user_picture: '/images/samples/Pupi.png'
        },
        connected: false
    },
    {
        id: 5,
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        created_at: new Date(2023, 0, 4, 20, 33, 1), // 2 sem
        User: {
            name: 'Don',
            lastName: 'Diablo',
            user_picture: '/images/samples/Pupi.png'
        },
        connected: true
    },
]

export default function ChatList() {
    const [messages, setMessages] = React.useState([null, null, null, null, null])

    React.useEffect(() => {
        setInterval(() => {
            setMessages(messagesArray)
        }, 5000);
    }, [])

    return (
        <Box p={2}>
            <Stack direction='column' spacing={2}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                >
                    Mensajes
                </Typography>
                <SearchBox />
            </Stack>
            <Box mt={3} />
            <List sx={{ width: '100%' }}>
                {messages.map((message, index) => <UserMessageCard data={message} index={index} />)}
            </List>
        </Box>
    );
}
