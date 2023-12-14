import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/material'
import LeftNavBar from './left-navigation/LeftNavBar'
import SearchBar from './right-navigation/SearchBar'
import RightNavBar from './right-navigation/RightNavBar'
export const NavBar = () => {
    return (
        <AppBar position="sticky">
          <Toolbar sx={{justifyContent: "space-between"}}>
            <LeftNavBar/>
            
            {/* only on sx screen, in the middle */}
            <Box sx={{display: {xs: "inline-flex", md: "none"}}}>
                <SearchBar />
            </Box>

            <RightNavBar />

          </Toolbar>
        </AppBar>
    )
}

export default NavBar;