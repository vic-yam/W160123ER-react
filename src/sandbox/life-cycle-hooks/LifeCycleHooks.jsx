import { AppBar, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavItem from '../../routes/NavItem';

const LifeCycleHooks = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="useState Cycle" to="use-state" color="black" />
                    <NavItem label="UseEffect Did Mount" to="useEffect-did-mount" color="black" />
                    <NavItem label="UseEffect Did Update" to="useEffect-did-update" color="black" />
                    <NavItem label="UseEffect Will Unmount" to="useEffect-will-unmount" color="black" />
                    <NavItem label="UseEffect Did Update - no deps" to="useEffect-did-update-no-deps" color="black" />
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    );
}

export default LifeCycleHooks;