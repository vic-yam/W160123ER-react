import { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";


const MyCardsPage = () => {
    const { value:{ cards, isPending, error },  handleGetMyCards, handleDeleteCard } = useCards();
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) navigate(ROUTES.LOGIN);
        else handleGetMyCards();
    }, [user]);

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }


    return (
        <Container sx={{position: "relative", minHeight: "92vh"}}> 
            <PageHeader title='Cards' subtitle='Here you can find your business cards' />
            {" "}
            {cards && (
                <Fab color="primary"
                    aria-label=""
                    onClick={() => navigate(ROUTES.CREATE_CARD)}
                    sx={{position: "absolute", bottom: 75, right: 16}}
                    >
                  <AddIcon />
                </Fab>   
            )}
            
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
            />
        </Container>
    )


};

export default MyCardsPage;