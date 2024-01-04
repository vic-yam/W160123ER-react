import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotLogged from './NotLogged';
import Logged from './Logged';
import MoreButton from './MoreButton';
import MenuBar from './MenuBar';
import { useState } from 'react';
import { useTheme } from '../../../../providers/ThemeProvider';

const RightNavBar = () => {

    const [anchorEl, setEnchorEl] = useState(null);
    const { isDark, toggleDarkMode } = useTheme();

    const user = false;

    const setAnchorEl = target => {
        setEnchorEl(target)
        console.log("you opened the menu");
    }

    const closeMenu = () => {
        setEnchorEl(null)

        console.log("you closed the menu");
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />
                <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                {!user && <NotLogged />}
                {user && <Logged setAnchorEl={setAnchorEl} />}

            </Box>

            <MoreButton setAnchorEl={setAnchorEl} />

            <MenuBar
                isMenuOpen={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onCloseMenu={closeMenu}
            />


        </>
    )
}

export default RightNavBar;