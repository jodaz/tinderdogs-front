import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import getUserPhoto from '../../utils/getUserPhoto';
import LinkBehavior from '../../components/LinkBehavior'

const PlanCard = props => (
    <Box sx={{
        display: 'flex',
        alignItems: 'start',
        margin: '1rem 0',
        cursor: 'pointer',
        borderRadius: '16px',
        color: '#fff',
        width: '100%',
        p: 1,
        height: 'fit-content',
        background: `url(${props.Banner && getUserPhoto(props.Banner.img)})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexDirection: 'column',
        backgroundColor: 'gray',
        textDecoration: 'none',
    }} component={LinkBehavior}  to={`/profile/settings/packs/${props.id}`} state={props}>
        <Box sx={{
            display: 'flex',
            alignSelf: 'end',
            color: '#FFD900'
        }}>
            <Typography
                variant="subtitle1"
                fontWeight={700}
                fontSize='16px'
                alignSelf='center'
                color="#fff"
                mr='2px'
            >
                €
            </Typography>
            <Typography
                variant="subtitle1"
                fontWeight={700}
                fontSize='24px'
                mr='3px'
            >
                {props.price}
            </Typography>
            <Typography
                variant="subtitle1"
                fontWeight={500}
                fontSize='14px'
                mt='4px'
            >
                / mes
            </Typography>
        </Box>
        <Typography
            variant="subtitle1"
            fontWeight={700}
            fontSize='24px'
        >
            Plan {props.name}
        </Typography>
        <Box sx={{
            display: 'flex',
            width: '100%'
        }}>
            {props.number_photos > 0 && (
                <Typography
                variant="subtitle1"
                fontWeight={500}
                mr={'10px'}
                >
                    +{props.number_photos} fotos
                </Typography>
            )}
            {props.number_videos > 0 && (
                <Typography
                variant="subtitle1"
                fontWeight={500}
                mr={'10px'}
                >
                    +{props.number_videos} videos
                </Typography>
            )}
        </Box>
    </Box>
)

export default PlanCard
