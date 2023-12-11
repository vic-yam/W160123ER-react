import PageHeader from "../components/PageHeader";
import {Container} from '@mui/material'
import Grid from '@mui/material/Grid'


const AboutPage = () => {
    return (
        <Container>
            <PageHeader title="About Page" subtitle="On this page you can find explanations about the application"/>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} alignSelf="center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In accusantium ipsa, provident, ea adipisci at distinctio quibusdam ratione ut dolore voluptatem porro eum commodi fuga quaerat quidem explicabo placeat maxime?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In accusantium ipsa, provident, ea adipisci at distinctio quibusdam ratione ut dolore voluptatem porro eum commodi fuga quaerat quidem explicabo placeat maxime?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In accusantium ipsa, provident, ea adipisci at distinctio quibusdam ratione ut dolore voluptatem porro eum commodi fuga quaerat quidem explicabo placeat maxime?
                </Grid>
                <Grid item md={4} xs={12} alignSelf="center" sx={{display: {md: 'flex', xs:"none"}, justifyContent: "center"}}>
                    <img src="/assets/images/card.jpg" alt="card" width="100%" />
                </Grid>
            </Grid>
        </Container>
    );

}

export default AboutPage;