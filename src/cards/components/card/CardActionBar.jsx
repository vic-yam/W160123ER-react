import { CardActions, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModeIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";
import useCards from "../../hooks/useCards";
import { useState } from "react";
import CardDeleteDialog from "./CardDeleteDialog";

const CardActionBar = ({
  onDeleteCard,
  handleLikeCard,
  handleEditCard,
  card,
}) => {
  const { user } = useUser();
  const [isDialogOpen, setIsDialog] = useState(false);

  const handleDialog = (term) => {
    if (term === "open") setIsDialog(true);
    else setIsDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDeleteCard(card._id);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user._id === card.user_id || user.isAdmin) && (
            <IconButton onClick={() => handleDialog("open")}>
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
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onDelete={handleDeleteCard}
        onChangeDialog={handleDialog}
      />
    </>
  );
};

export default CardActionBar;
