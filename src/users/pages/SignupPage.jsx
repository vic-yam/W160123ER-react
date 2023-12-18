import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel';
import Container from '@mui/material/Container'
import PageHeader from '../../components/PageHeader';

const SignupPage = () => {
    const user = false
    if (user) return <Navigate replace to={ROUTES.CARDS} />
    return (
        <Container maxWidth="lg">
            <PageHeader
            title='Signup Page'
            subtitle='In order to register, please fill in the form below with your personal information and click on the "Sign Up" button.'

            >

            </PageHeader>
          
        </Container>
    )
}
 
export default SignupPage;