import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from "../../routes/NavItem";

const HooksWrapper = () => {

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="set posts" to="set-posts" color="black" ></NavItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
}

export default HooksWrapper;