import Container from '@mui/material/Container'
import PageHeader from '../components/PageHeader';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const ErrorPage = () => {
    return (
        <Container >
            <PageHeader title="Error 404" subtitle='page not found' />
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="initial">
                        Sorry, this page does not exist.
                    </Typography>
                    <Button variant="text" color="primary">
                        Go back to homepage
                    </Button>
                </Grid>
                <Grid item xs={12} md={4} justifyContent="center">
                    <img src="/assets/images/broken-robot.png" alt="broken robot" width="100%"
                    
    
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ErrorPage;