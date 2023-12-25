import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import React from "react";
import { Outlet } from "react-router-dom";

const Memoization = () => {

    const memoized = () => {
        let cache = {
            // 1: {
            //     1: 2
            // },
            // 2: {
            //     1: 3,
            //     2: 4
            // }
        };
        const calculation = (a,b) => a + b;
        return (a,b) => {
            if(cache[a] && cache[a][b] !== undefined) {
                return cache[a][b];
            } else {
                console.count("calculating");
                const result = calculation(a, b);
                cache = {
                    ...cache,
                    [a]: {
                        ...cache[a],
                        [b]: result
                    }
                }
                return result;
            }
        }
    }

    const memoizedCalculation = memoized();
    console.log(memoizedCalculation(1,2));
    console.log(memoizedCalculation(2,1));
    
    


    
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="use callback" to="use-callback" color="black" ></NavItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
};

export default Memoization;
