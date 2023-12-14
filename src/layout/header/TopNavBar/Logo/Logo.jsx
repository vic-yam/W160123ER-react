import Typography from '@mui/material/Typography'
const Logo = () => {
    return (
        <Typography
            variant="h4"
            sx={{
                display: { xs: "none", md: "inline-flex" },
                marginRight: 2,
                fontFamily: "fantasy",
            }}>
            BCard
        </Typography>
    )
}
export default Logo;