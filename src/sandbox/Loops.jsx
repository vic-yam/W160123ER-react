import Box from '@mui/material/Box';

const Loops = () => {
    const arrOfStrings = ['one', 'two', 'three', 'four', 'five'];
    return (
        <Box m={2}>
            {arrOfStrings.map((str, index, arr) => {
                return <div key={index} m={2}>{str}</div>
            })}
        </Box>
    )

}

export default Loops;