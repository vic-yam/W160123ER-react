import { useCallback, useMemo, useState } from "react";
import { createCard, deleteCard, getCard, getCards, getMyCards } from "../service/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const useCards = () => {

    const snack = useSnackbar();
    const navigate = useNavigate();

    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const requestStatus = (card, cards, isPending, error) => {
        setCard(card);
        setCards(cards);
        setPending(isPending);
        setError(error);
    }
    
    useAxios();

    const handleGetCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getCards();
            snack("success", "success")
            requestStatus(null, cards, false, null);
        } catch (error) {
            snack("error", error)
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleGetCard = useCallback(async (cardFromClient) => {
        try {
            setPending(true);
            const card = await getCard(cardFromClient);
            requestStatus(card, null, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleGetMyCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getMyCards();
            requestStatus(null, cards, false, null );

        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleDeleteCard = useCallback( async (cardId) => {
        try {
            setPending(true);
            await deleteCard(cardId);
            snack("success", "The business card has been successfully deleted");
        } catch (error) {
            requestStatus(null, null, false, error );
        }
    }, []);
    
    const handleCreateCard = useCallback( async (cardFromClient) => {
        try {
            setPending(true);
            const normalizedCard = normalizeCard(cardFromClient)
            const card = await createCard(normalizedCard);
            requestStatus(card, null, false, null );
            snack("success", "The business card has been successfully created");
            navigate(ROUTES.MY_CARDS);
        } catch (error) {
            requestStatus(null, null, false, error );
        }
    }, []);


    const value = useMemo(() => ({
        cards, card, isPending, error
    }), [cards, card, isPending, error]);


    return { value, 
        handleGetCards, 
        handleGetCard, 
        handleGetMyCards, 
        handleDeleteCard,
        handleCreateCard };

}

export default useCards;