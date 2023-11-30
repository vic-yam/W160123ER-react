
import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditModeIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardActionBar = ({handleDeleteCard, handleLikeCard, handleEditCard, card}) => {
    return (
        <CardActions disableSpacing sx={{ paddingTop: 0, justifyContent: 'space-between' }}>
            <Box>
                <IconButton onClick={() => handleDeleteCard(card._id)}>
                    <DeleteIcon  />
                </IconButton>
                <IconButton onClick={() => handleEditCard(card._id)}>
                    <EditModeIcon />
                </IconButton>
            </Box>
            <Box>
            <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => handleLikeCard(card._id)}>
                    <FavoriteIcon />
                </IconButton>
            </Box>

        </CardActions>
    );
}

export default CardActionBar;