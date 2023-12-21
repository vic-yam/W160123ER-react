import useCounter from "./useCounter";
import Button from '@mui/material/Button'

const CustomCounterHook = () => {
    const [counter, inc, dec, res] = useCounter(0);

    return (
        <div>
            <p>counter: {counter}</p>
            <Button variant="outlined" onClick={inc} style={{ padding: 3 }}>
                increment
            </Button>
            <Button variant="outlined" onClick={dec} style={{ padding: 3 }}>
                decrement
            </Button>
            <Button variant="outlined" onClick={res} style={{ padding: 3 }}>
                reset
            </Button>
        </div>
    )
}
export default CustomCounterHook;