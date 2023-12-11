import { Container, Stack, Typography } from "@mui/material";
import CardComponent from "./card/Card";

//react component class


const Cards = ({ cards }) => {
    
    // const cards = [];
    const handleDeleteCard = cardId => console.log(`Delete card ${cardId}`);
    const handleLikeCard = cardId => console.log(`Like card ${cardId}`);
    const handleEditCard = cardId => console.log(`Edit card ${cardId}`);

    const methods = { handleDeleteCard, handleLikeCard, handleEditCard };

    if (!cards.length) {
        return <Typography variant="h5">No cards found</Typography>;
    }
    return (
        <Container>
            <Stack spacing={1} gap={2} direction="row" my={2} flexWrap="wrap" justifyContent="center">
                {
                    /* <CardComponent card={cards[0]} key={0}></CardComponent>
                    <CardComponent card={cards[1]} key={1}></CardComponent>
                    <CardComponent card={cards[2]} key={2}></CardComponent> */
                }
                {
                    cards.map((card, i) => (<CardComponent {...methods} card={card} key={i}></CardComponent>))
                }
            </Stack>
        </Container>
    )
}

export default Cards