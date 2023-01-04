import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DialogTitle from './DialogTitle';
import { useForm } from "react-hook-form";
import ciudades from '../utils/ciudades';
import provincias from '../utils/provincias';
import SelectInput from './Forms/SelectInput';
import { usePublications, toggleFilters } from '../context/PublicationContext';
import TextInput from './Forms/TextInput';
import razas from '../utils/breeds';
import ChipArrayInput from './Forms/ChipArrayInput';

const genders = [
    { label: 'Macho', value: 'macho' },
    { label: 'Hembra', value: 'hembra' },
    { label: 'Ambos', value: 'both' },
]

const FilterDrawer = () => {
    const [cities, setCities] = React.useState([])
    const { control, handleSubmit, watch, reset, formState: {
        isSubmitting
    }} = useForm({
        reValidateMode: "onBlur"
    });
    const province = watch('province')
    const { state: { openFilter }, dispatch } = usePublications();

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        toggleFilters(dispatch)
        reset();
    };

    const list = (anchor) => (
        <Box onKeyDown={toggleDrawer(anchor, false)}>
            <DialogTitle onClose={toggleDrawer(anchor, false)}>
                Filtros
            </DialogTitle>
            <Divider />
            <Box sx={{ p: 3 }}>
                <TextInput
                    name='province'
                    control={control}
                    label='País'
                    value='España'
                    optionLabel='País'
                    disabled
                />
            </Box>
            <Box sx={{ p: 3 }}>
                <SelectInput
                    name='province'
                    control={control}
                    disabled={isSubmitting}
                    label='Ciudad, estado o provincia'
                    options={provincias}
                    optionLabel='nombre'
                    InputProps={{
                        placeholder: 'Seleccione'
                    }}
                    noOptionsText='Sin resultados'
                />
            </Box>
            {!!(cities.length) && (
                <Box sx={{ p: 3 }}>
                    <SelectInput
                        name='city'
                        control={control}
                        disabled={isSubmitting}
                        label='Distrito'
                        options={cities}
                        optionLabel='nombre'
                        InputProps={{
                            placeholder: 'Seleccione'
                        }}
                        noOptionsText='Sin resultados'
                    />
                </Box>
            )}
            <Divider />
            <Box sx={{ p: 3 }}>
                <ChipArrayInput
                    control={control}
                    name='gender'
                    labels={genders}
                    disabled={isSubmitting}
                    label='Sexo'
                    property='label'
                    propertyValue='value'
                />
            </Box>
            <Divider />
            <Box sx={{ p: 3 }}>
                <SelectInput
                    label="Raza"
                    control={control}
                    options={razas}
                    disabled={isSubmitting}
                    name="breed"
                    InputProps={{
                        placeholder: 'Seleccione la raza'
                    }}
                    noOptionsText='Sin resultados'
                />
            </Box>
            <Box sx={{ p: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={toggleDrawer(anchor, false)}
                    fullWidth
                >
                    Agregar
                </Button>
            </Box>
        </Box>
    );

    React.useEffect(() => {
        if (province) {
            const filteredCities = ciudades
                .filter(({ id_provincia }) => id_provincia == province.id)

            setCities(filteredCities)
        }
    }, [province])

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Drawer
                    anchor={'bottom'}
                    open={openFilter}
                    onClose={toggleDrawer('bottom', false)}
                    sx={{
                        '& .MuiPaper-root': {
                            position: 'absolute',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px',
                            width: '99%',
                            bottom: 0
                        },
                    }}
                    PaperProps={{ style: { position: 'absolute' } }}
                    BackdropProps={{ style: { position: 'absolute' } }}
                    ModalProps={{
                        container: document.getElementById('drawer-container'),
                        style: { position: 'absolute' }
                    }}
                >
                    {list('bottom')}
                </Drawer>
            </Box>
        </Box>
    );
}

export default FilterDrawer
