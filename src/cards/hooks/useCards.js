import { useState } from "react";
import { getCards } from "../service/cardApiService";

const useCards = () => {
    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const handleGetCards = async () => {
        try {
            setPending(true);
            const cards = await getCards();
            setPending(false);
            setError(null);
            setCards(cards);
        } catch (error) {
            setPending(false);
            setError(error);
            setCards(null);
        }
    }

    return { cards, card, isPending, error, handleGetCards };

}

export default useCards;