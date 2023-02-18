import * as React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { openGuestWarning, useGuest } from '../../../context/GuestContext';
import MessageIconButton from './MessageIconButton';
import { apiProvider } from '../../../api';
import { useNavigate } from 'react-router-dom';

const MessageButton = ({ itemID, shouldCreate }) => {
    const { state: { isAuth } } = useAuth();
    const { dispatch } = useGuest();
    const navigate = useNavigate()

    const newChat = async () => {
        try {
            const res = await apiProvider.post('/api/chat/new-conversation', {
                user2: itemID
            })

            if (res.status >= 200 || res.status < 300) {
                const { data: { data } } = res;

                navigate(`/chat/${data.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const action = e => {
        e.stopPropagation()
        if (!isAuth) {
            openGuestWarning(dispatch, 'enviar mensajes');
        } else {
            if (shouldCreate) {
                newChat()
            } else {
                navigate(`/chat/${itemID}`)
            }
        }
    }

    return (
        <MessageIconButton
            active={true}
            onClick={action}
        />
    );
}

export default MessageButton
