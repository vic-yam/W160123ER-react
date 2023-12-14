import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PortraitIcon from '@mui/icons-material/Portrait';

const Footer = () => {
    return (
        <Paper sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BottomNavigationAction label="About" icon={<InfoIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="My Cards" icon={<PortraitIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Footer;