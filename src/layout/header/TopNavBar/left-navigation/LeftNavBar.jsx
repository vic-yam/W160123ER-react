import { Box, Button, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT}></NavItem>
        {user && user.isBusiness && (
          <>
            <NavItem label="My Cards" to={ROUTES.MY_CARDS}></NavItem>
            <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS}></NavItem>
          </>
        )}
        {user && user.isAdmin && (
          <NavItem label="Sandbox 🧃" to={ROUTES.SANDBOX}></NavItem>
        )}
      </Box>
    </Box>
  );
};
export default LeftNavBar;
