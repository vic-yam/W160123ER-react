import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotLogged from './NotLogged';
import Logged from './Logged';

const RightNavBar = () => {
    const user = true;
    let anchorEl = null;

    const setAnchorEl = target => {
        anchorEl = target;
        console.log("you opened the menu");
    }

    const closeMenu = () => {
        anchorEl = null;
        console.log("you closed the menu");
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />
                <IconButton sx={{ marginLeft: 1 }}>
                    <LightModeIcon />
                    {/* <DarkModeIcon /> */}
                </IconButton>

                {!user && <NotLogged />}
                {user && <Logged setAnchorEl={setAnchorEl} />}

            </Box>

            <MoreButton setAnchorEl={setAnchorEl} />
        </>
    )
}

export default RightNavBar;