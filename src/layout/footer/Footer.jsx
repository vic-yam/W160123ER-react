import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const Footer = () => {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const {user} = useUser()

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          onClick={() => navigateTo(ROUTES.ABOUT)}
          label="About"
          icon={<InfoIcon />}
        />
        {user && (
          <BottomNavigationAction
            onClick={() => navigateTo(ROUTES.FAV_CARDS)}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
        )}
        {user && user.isBusiness && (
          <BottomNavigationAction
            onClick={() => navigateTo(ROUTES.MY_CARDS)}
            label="My Cards"
            icon={<PortraitIcon />}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
