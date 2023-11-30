
import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditModeIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardActionBar = () => {
    return (
        <CardActions disableSpacing sx={{ paddingTop: 0, justifyContent: 'space-between' }}>
            <Box>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditModeIcon />
                </IconButton>
            </Box>
            <Box>
            <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </Box>

        </CardActions>
    );
}

export default CardActionBar;