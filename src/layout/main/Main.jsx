
import { node } from "prop-types"
import { Box } from "@mui/material"
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
    const { isDark } = useTheme();
    return (
        <Box sx={{ minHeight: "90vh", backgroundColor: isDark ? "#333333" : "#e3f2fd" }}>
            {children}
        </Box>
    )
}

Main.propTypes = {
    children: node.isRequired
}
export default Main