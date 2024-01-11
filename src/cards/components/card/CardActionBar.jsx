import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModeIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({
  handleDeleteCard,
  handleLikeCard,
  handleEditCard,
  card,
}) => {
  const { user } = useUser();
  return (
    <CardActions
      disableSpacing
      sx={{ paddingTop: 0, justifyContent: "space-between" }}
    >
      <Box>
        {user && (user._id === card.user_id || user.isAdmin) && (
          <IconButton onClick={() => handleDeleteCard(card._id)}>
            <DeleteIcon />
          </IconButton>
        )}

        {user && user._id === card.user_id && (
          <IconButton onClick={() => handleEditCard(card._id)}>
            <EditModeIcon />
          </IconButton>
        )}
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
};

export default CardActionBar;
