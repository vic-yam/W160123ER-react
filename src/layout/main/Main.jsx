
import { node } from "prop-types"
import { Box } from "@mui/material"

const Main = ({children}) => {

    return (
        <Box sx={{minHeight: "90vh", backgroundColor: "lightgray"}}>
            {children}
        </Box>
    )
}

Main.propTypes = {
    children: node.isRequired
}
export default Main