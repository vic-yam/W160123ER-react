import Loops from "./Loops";
import OnClick from "./events/Onclick";
import SetPosts from "./hooks/SetPosts";
import UseStateWithFunction from "./hooks/UseStateWithFunction";
import UseStateWithObject from "./hooks/UseStateWithObject";
import MuiSandbox from "./mui-sandbox/MuiSandbox";
import FatherPropTypes from "./propTypes/FatherPropTypes";
import FatherPropsObject from "./props/props-object/FatherPropsObject";
import FatherPropsString from "./props/props-string/FatherPropsString";
import FatherPropsTwoKeys from "./props/props-two-keys/FatherPropsTwoKeys";

import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NavItem from "../routes/NavItem";

const handleClick = () => {
    let count = 0;
    const inner = (e) => {
        count++;
        // console.log(e);
        console.log(count);
    }
    return inner;
};

const inner = handleClick();


const Sandbox = () => (
    <>
        <AppBar position="static" color="transparent">
            <Toolbar>
                <NavItem label="Hooks 🪝" to="hooks" color="black" ></NavItem>
                <NavItem label="LifeCycle Hooks 🪝" to="life-cycle-hooks" color="black" ></NavItem> 
                <NavItem label="Custom Hooks 🪝" to="custom-hooks" color="black" ></NavItem> 
                <NavItem label="Memoization 🤔" to="memoization" color="black" ></NavItem> 
                <NavItem label="context" to="context" color="black" ></NavItem> 
                <NavItem label="form" to="form" color="black" ></NavItem> 
            </Toolbar>
        </AppBar>

        <Outlet />
    </>
)

export default Sandbox;