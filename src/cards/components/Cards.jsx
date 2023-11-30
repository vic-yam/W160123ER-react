import { Container, Stack, Typography } from "@mui/material";
import CardComponent from "./card/Card";


const Cards = () => {
    const cards = 
        [{
        _id: "639221ec70962dd4df2b709b",
        title: "Business Name 1",
        subtitle: "Business Headline",
        description: "some desc",
        phone: "0500000000",
        email: "admin@gmail.com",
        web: "https://www.hackampus.com",
        image: {
            url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
            alt: "Wowww this is Apple Watch",
            _id: "639221ec70962dd4df2b709c",
        },
        address: {
            state: "israel",
            country: "israel",
            city: "Tel Aviv",
            street: "STREET",
            houseNumber: 1,
            zip: 123456,
            _id: "639221ec70962dd4df2b709d",
        },
        bizNumber: 6480165,
        createdAt: "2022-12-08T17:42:04.379Z",
        user_id: "638503e4caa1f3d9dbbcf7bc",
        likes: ["639221ec70962dd4df2b70a3"],
        __v: 0,
    },
    {
        _id: "639221ec70962dd4df2b709b",
        title: "Business Name 2",
        subtitle: "Business Headline",
        description: "some desc",
        phone: "0500000000",
        email: "admin@gmail.com",
        web: "https://www.hackampus.com",
        image: {
            url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
            alt: "Wowww this is Apple Watch",
            _id: "639221ec70962dd4df2b709c",
        },
        address: {
            state: "israel",
            country: "israel",
            city: "Tel Aviv",
            street: "STREET",
            houseNumber: 1,
            zip: 123456,
            _id: "639221ec70962dd4df2b709d",
        },
        bizNumber: 6480165,
        createdAt: "2022-12-08T17:42:04.379Z",
        user_id: "638503e4caa1f3d9dbbcf7bc",
        likes: ["639221ec70962dd4df2b70a3"],
        __v: 0,
    },
    {
        _id: "639221ec70962dd4df2b709b",
        title: "Business Name 3",
        subtitle: "Business Headline",
        description: "some desc",
        phone: "0500000000",
        email: "admin@gmail.com",
        web: "https://www.hackampus.com",
        image: {
            url: "https://cdn.pixabay.com/photo/2019/12/18/19/22/christmas-4704706_960_720.jpg",
            alt: "Wowww this is Apple Watch",
            _id: "639221ec70962dd4df2b709c",
        },
        address: {
            state: "israel",
            country: "israel",
            city: "Tel Aviv",
            street: "STREET",
            houseNumber: 1,
            zip: 123456,
            _id: "639221ec70962dd4df2b709d",
        },
        bizNumber: 6480165,
        createdAt: "2022-12-08T17:42:04.379Z",
        user_id: "638503e4caa1f3d9dbbcf7bc",
        likes: ["639221ec70962dd4df2b70a3"],
        __v: 0,
    }]
    // const cards = [];
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
                    cards.map((card, i) => (<CardComponent card={card} key={i}></CardComponent>))
                }
            </Stack>
        </Container>
    )
}

export default Cards