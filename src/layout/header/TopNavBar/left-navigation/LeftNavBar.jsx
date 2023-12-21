import { Box, Button, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const LeftNavBar = () => {
    return (
        <Box>
            <LogoIcon />
            <Logo />

            <Box sx={{display: {xs: "none", md: "inline-flex"}}}>
                <NavItem label="About" to={ROUTES.ABOUT} ></NavItem>
                <NavItem label="My Cards" to={ROUTES.MY_CARDS} ></NavItem>
                <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} ></NavItem>
                <NavItem label="Sandbox 🧃" to={ROUTES.SANDBOX} ></NavItem>

            </Box>

        </Box>
            
    )
}
export default LeftNavBar;