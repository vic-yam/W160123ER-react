import Container from '@mui/material/Container'
import PageHeader from '../../components/PageHeader'
import Cards from '../components/Cards'
const CardsPage = () => {
    const cards =
        [{
            _id: "639221ec70962dd4df2b7001",
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
            _id: "639221ec70962dd4df2b7001",
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
            _id: "639221ec70962dd4df2b7002",
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
            _id: "639221ec70962dd4df2b7003",
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
    return (
        <Container >
            <PageHeader title='Cards' subtitle='Here you can find business cards from all categories' />
            <Cards cards={cards} />
        </Container>
    )
}

export default CardsPage