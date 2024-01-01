import { useState } from "react";
import { getCard, getCards } from "../service/cardApiService";
import useAxios from "../../hooks/useAxios";

const useCards = () => {

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

    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            requestStatus(null, cards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }

    const handleGetCard = async (cardFromClient) => {
        try {
            setPending(true);
            const card = await getCard(cardFromClient);
            requestStatus(card, null, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }
    
    return { cards, card, isPending, error, handleGetCards, handleGetCard };

}

export default useCards;