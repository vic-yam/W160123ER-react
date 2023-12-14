import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

const Logged = ({ setAnchorEl }) => {
    return (

        <Tooltip title="Open settings">
            <IconButton
                sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
                onClick={e => setAnchorEl(e.target)}
            >
                <Avatar alt='me' src='/assets/images/avatar.png'></Avatar>
            </IconButton>
        </Tooltip>
    )
}

export default Logged;