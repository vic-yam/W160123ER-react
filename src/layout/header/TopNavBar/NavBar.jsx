import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/material'
import LeftNavBar from './left-navigation/LeftNavBar'
export const NavBar = () => {
    return (
        <AppBar position="sticky">
          <Toolbar sx={{justifyContent: "space-between"}}>
            <LeftNavBar/>
            
            <Box>
                {/* <SearchBar /> */}
            </Box>

            {/* <RightNavBar /> */}

          </Toolbar>
        </AppBar>
    )
}

export default NavBar;