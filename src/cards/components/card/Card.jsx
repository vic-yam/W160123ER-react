import { Card, CardActionArea } from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';

const CardComponent = ({ card, handleDeleteCard, handleLikeCard, handleEditCard }) => {

    return (
        <Card sx={{ minWidth: 280, maxWidth: 350 }}>
            <CardActionArea>
                <CardHead image={card.image} />
                <CardBody card={card} />

            </CardActionArea>
            <CardActionBar {...{handleDeleteCard, handleLikeCard, handleEditCard, card}} />
        </Card>
    )
}

export default CardComponent