import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkBehavior from '../../components/LinkBehavior';
import {
    PlusSquare,
    Newspaper,
    Image
} from 'lucide-react';
import CustomButton from './CustomButton';
import getSearchParams from '../../utils/getSearchParams';
import { useLocation, useNavigate } from 'react-router-dom';
import BasicTabs from '../../components/Tabs';
import ProfileOptions from './ProfileOptions';
import { renewToken, useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form';
import PhotoInput from '../../components/Forms/PhotoInput';
import { fileProvider, apiProvider } from '../../api'
import formDataHandler from '../../utils/formDataHandler';
import LatestPublishedBlogs from '../Blog/LatestPublishedBlogs';

const RegisterOwner = React.lazy(() => import('../../components/RegisterOwner'));

const PetOwner = () => {
    const [error, setError] = React.useState('')
    const { state: { user }, dispatch } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const currProfilePic = user.img_profile ? JSON.parse(user.img_profile)[0] : null;
    const registerOwner = getSearchParams(location, 'register');
    const { handleSubmit, control, watch, formState: {
        isSubmitting
    }} = useForm();

    const onSubmit = async (values) => {
        try {
            const parsedData = {
                files: values.files.new
            }

            if (values.files.previous.path) {
                parsedData.img_delete = values.files.previous.path
            }

            const formData = await formDataHandler(parsedData, 'files')

            const res = await fileProvider.put('/api/user/img-profile', formData)

            if (res.status >= 200 && res.status < 300) {
                renewToken(dispatch, user)
            }
        } catch (error) {
            setError('Ha ocurrido un error inesperado.')
        }
    }

    const deletePhoto = async (picture) => {
        try {
            const res = await apiProvider.delete(`/api/user/img-profile/${picture}`)

            if (res.status >= 200 && res.status < 300) {
                renewToken(dispatch, user)
            }
        } catch (error) {
            setError('Ha ocurrido un error inesperado.')
        }
    }

    React.useEffect(() => {
        const subscription = watch(handleSubmit(onSubmit))

        return () => subscription.unsubscribe();
    }, [handleSubmit, watch])

    return (
        <Box sx={{
            padding: '8px 0 0 0',
            textAlign: 'center',
            width: '100%'
        }}>
            <BasicTabs />
            <Box sx={{
                marginTop: '1rem',
                width: '100%'
            }}>
                <ProfileOptions />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flex: 1,
                    p: 2
                }}>
                    <PhotoInput
                        name="files"
                        control={control}
                        defaultValue={currProfilePic}
                        disabled={isSubmitting}
                        handleDelete={() => deletePhoto(currProfilePic)}
                    />
                </Box>
                <Typography
                    color="text.tertiary"
                    variant="subtitle1"
                    textAlign='center'
                >
                    {user.name} {user.lastName && `${user.lastName}`}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flex: 1,
                    paddingTop: '4rem',
                }}>
                    <CustomButton
                        size={32}
                        icon={<Image />}
                        title='Subir fotos personales'
                        sx={{
                            background: 'linear-gradient(122.24deg, #F2D862 6.2%, #EBA046 69.82%);'
                        }}
                        component={LinkBehavior}
                        to='pictures'
                    />
                    <CustomButton
                        size={32}
                        icon={<Newspaper />}
                        title='Crear publicación'
                        color="primary"
                        component={LinkBehavior}
                        to='/blogs/create'
                    />
                    {!!(!user.birth_date || !user.img_profile || !user.province) && (
                        <CustomButton
                            size={32}
                            icon={<PlusSquare />}
                            title='Añadir información'
                            color="info"
                            component={LinkBehavior}
                            to='?register=true'
                        />
                    )}
                </Box>
                {!!(!user.birth_date || !user.img_profile || !user.province) && (
                    <React.Suspense>
                        <RegisterOwner
                            open={registerOwner}
                            handleClose={() => navigate('/profile/owner')}
                            redirect='/profile/owner'
                        />
                    </React.Suspense>
                )}
            </Box>
            <LatestPublishedBlogs />
        </Box>
    );
}

export default PetOwner
