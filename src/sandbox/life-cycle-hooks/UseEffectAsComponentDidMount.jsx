import { useEffect, useState } from "react";
import { getTime } from "./utils";
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const UseEffectAsComponentDidMount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`in useEffect did mount: ${getTime()}`);
        setCount(prev => prev + 1);
    }, [])

    return (
        <Container maxWidth="lg">
            {console.log(`in render ${getTime()}`)}
            <Box>Count: {count}</Box>
            <div>
                <Button variant="outlined" color="primary"
                onClick={() => setCount(prev => prev + 1)}
                >
                  +
                </Button>
                
                <Button variant="outlined" color="primary"
                onClick={() => setCount(prev => prev - 1)}
                >
                  -
                </Button>

            </div>
          
        </Container>
    )


}

export default UseEffectAsComponentDidMount;