import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MoreButton = ({ setAnchorEl }) => {
    return (
        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <IconButton
                aria-label="menu"
                onClick={e => setAnchorEl(e.target)}
                size='large'
                color='inherit'
                >
                    <MoreVertIcon />
            </IconButton>
        </Box>
    )
}
export default MoreButton;
