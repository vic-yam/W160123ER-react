import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

const LogoIcon = () => {
    return (
        <IconButton 
            sx={{
                display: { xs: "inline-flex", md: "none" },
                size: "large",
                edge: "start",
                color: "inherit",
            }}>
          <Avatar alt='me' src='/assets/images/business-card.png'></Avatar>
        </IconButton>
    )
}

export default LogoIcon;