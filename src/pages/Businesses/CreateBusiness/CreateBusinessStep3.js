import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GalleryInput from '../../../components/GalleryInput'
import { ADD_PHOTOS } from '../../../validations';
import { useForm } from 'react-hook-form';
import { saveStep, useMultiStepForm } from '../../../context/MultiStepContext';
import { useNavigate } from 'react-router-dom';
import Stepper from '../Stepper';

const CreateBusinessStep3 = () => {
    const navigate = useNavigate()
    const { dispatch } = useMultiStepForm();
    const { control, handleSubmit } = useForm();

    const onSubmit = data => {
        saveStep(dispatch, data);
        navigate('/businesses/create/step-4')
    }

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stepper
                title='PASO 3'
                type="create"
            />
            <Box p={2}>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                >
                    Ingresar imágenes que identifiquen al negocio
                </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
                <GalleryInput
                    control={control}
                    name='files'
                    rules={ADD_PHOTOS.rules}
                    validations={ADD_PHOTOS.messages}
                />
            </Box>
            <Box sx={{ p: 2 }}>
                <Button
                    variant='contained'
                    type='submit'
                >
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
}

export default CreateBusinessStep3