import { useState } from "react";
import { getTime } from "./utils";
import { useEffect } from "react";
import { Container, Box, Button } from '@mui/material'


const UseEffectAsComponentDidUpdate = () => {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("in useEffect did update: ", getTime());
    }, [count])


    return (
        <Container maxWidth="lg">
            {console.log(`in render ${getTime()}`)}
            <Box>Count: {count}</Box>
            <Box>Num: {num}</Box>
            <div>
                <Button variant="outlined" color="primary"
                    onClick={() => setCount(prev => prev + 1)}>
                   Count +
                </Button>

                <Button variant="outlined" color="primary"
                    onClick={() => setNum(prev => prev + 1)}>
                   Num +
                </Button>

            </div>

        </Container>
    )
}

export default UseEffectAsComponentDidUpdate;