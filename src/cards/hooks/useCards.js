import { useCallback, useEffect, useMemo, useState } from "react";
import { changeLikeStatus, createCard, deleteCard, getCard, getCards, getMyCards, updateCard } from "../service/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const useCards = () => {

    const snack = useSnackbar();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState(null);
    const [searchParams] = useSearchParams();

    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useUser();

    useEffect(() => {
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);

    useEffect(() => {
        if(cards) {
            const filtered = cards.filter(c => c.title.includes(query) || String(c.bizNumber).includes(query));
            setFilteredCards(filtered);
        }
    }, [query, cards]);

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
            return card;
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

    const handleUpdateCard = useCallback( async (cardId, cardFromClient) => {
        try {
            setPending(true);
            const card = await updateCard(cardId, cardFromClient);
            requestStatus(card, null, false, null);
            snack("success", "The business card has been successfully updated");
            navigate(ROUTES.MY_CARDS);
        } catch (error) {
            requestStatus(null, null, false, error );
        }
    }, []);

    const handleLikeCard = useCallback( async (cardId) => {
        try {
            setPending(true);
            const card = await changeLikeStatus(cardId);
            requestStatus(card, cards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error );
        }
    }, []);

    const handleGetFavCards = useCallback( async () => {
        try {
            setPending(true);
            const cards = await getCards();
            const favCards = cards.filter(card => !!card.likes.find(id => id === user._id));
            requestStatus(null, favCards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error );
        }
    }, []);

    const value = useMemo(() => ({
        cards, card, isPending, error, filteredCards
    }), [cards, card, isPending, error, filteredCards]);


    return { value, 
        handleGetCards, 
        handleGetCard, 
        handleGetMyCards, 
        handleDeleteCard,
        handleCreateCard,
        handleUpdateCard,
        handleLikeCard,
        handleGetFavCards };

}

export default useCards;