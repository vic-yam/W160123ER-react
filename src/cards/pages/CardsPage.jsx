import Container from '@mui/material/Container'
import PageHeader from '../../components/PageHeader'
import { useEffect, useState } from 'react'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'
const CardsPage = () => {

    const { value:{cards, error, isPending }, handleGetCards, handleDeleteCard, handleGetMyCards } = useCards();

    useEffect(() => {
        handleGetCards();
    }, []);

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }

    return (
        <Container >
            <PageHeader title='Cards' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )
}

export default CardsPage