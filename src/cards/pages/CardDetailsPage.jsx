import { useParams } from "react-router-dom";
import Container from '@mui/material/Container'
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";

const CardDetailsPage = () => {

    const { id } = useParams();

    const { value: {card} , handleGetCard } = useCards();

    useEffect(() => {
        handleGetCard(id);
    }, [id]);

    return (
        <Container maxWidth="lg">
            <PageHeader
                title='Business Details'
                subtitle='Here you can find all the information about the business you are looking for.'
            >

            </PageHeader>
            <div>Details od card: {card?.title} {card?.subtitle}</div>

        </Container>
    )
}

export default CardDetailsPage;

