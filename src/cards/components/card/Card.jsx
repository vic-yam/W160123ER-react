import {Card, CardActionArea} from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';

const CardComponent = ({card}) => {
    
    return (
        <Card sx={{minWidth: 280, maxWidth: 350}}>
            <CardActionArea>
                <CardHead image={card.image} />
                <CardBody card={card} />

            </CardActionArea>
            <CardActionBar />
        </Card>
    )
}

export default CardComponent