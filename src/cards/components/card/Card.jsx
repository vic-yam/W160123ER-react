import {Card, CardActionArea} from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';

const CardComponent = () => {
    const card = {
        _id: "639221ec70962dd4df2b709b",
        title: "Business Name",
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
    };
    return (
        <Card sx={{minWidth: 280, maxWidth: 350}}>
            <CardActionArea>
                <CardHead image={card.image} />
                <CardBody card={card} />
            </CardActionArea>
        </Card>
    )
}

export default CardComponent