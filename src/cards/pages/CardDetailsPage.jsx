import { useParams } from "react-router-dom";
import Container from '@mui/material/Container'
import PageHeader from "../../components/PageHeader";

const CardDetailsPage = () => {

    const { id } = useParams();
    return (
        <Container maxWidth="lg">
            <PageHeader
                title='Business Details'
                subtitle='Here you can find all the information about the business you are looking for.'
            >

            </PageHeader>
            <div>Details od card: {id}</div>

        </Container>
    )
}

export default CardDetailsPage;

