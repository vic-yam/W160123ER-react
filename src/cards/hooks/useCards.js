import { useCallback, useMemo, useState } from "react";
import { deleteCard, getCard, getCards, getMyCards } from "../service/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useCards = () => {

    const snack = useSnackbar();

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
    
    const value = useMemo(() => ({
        cards, card, isPending, error
    }), [cards, card, isPending, error]);


    return { value, handleGetCards, handleGetCard, handleGetMyCards, handleDeleteCard };

}

export default useCards;