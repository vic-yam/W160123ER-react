import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import LeftNavBar from "./left-navigation/LeftNavBar";
import SearchBar from "./right-navigation/SearchBar";
import RightNavBar from "./right-navigation/RightNavBar";
import MenuProvider from "./menu/MenuProvider";
export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />

          {/* only on sx screen, in the middle */}
          <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <SearchBar />
          </Box>

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
};

export default NavBar;
