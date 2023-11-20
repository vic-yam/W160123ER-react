import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
const CardComponent = () =>{
    return(
        <Card sx={{width: 250, m: 2}} >
            <CardActionArea>
                <CardHeader title="Card Title" />
                <CardContent>
                    <Typography variant="h1" color="initial">Card Content</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

export default CardComponent