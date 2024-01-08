import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForms";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import Container from '@mui/material/Container'
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(initialLoginForm, loginSchema, handleLogin);
  
  if (user) return <Navigate to={ROUTES.CARDS} />;

   return (
    <Container 
        sx={{
            pt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        title='Login'
        styles={{ maxWidth: "450px" }}
        to={ROUTES.CARDS}
      >
        <Input 
            label={'Email'}
            name={'email'}
            type={'email'}
            data={value.data}
            error={value.errors.email}
            handleChange={rest.handleChange}
        />
        <Input 
            label={'Password'}
            name={'password'}
            type={'password'}
            data={value.data}
            error={value.errors.password}
            handleChange={rest.handleChange}
        />
      </Form>
    </Container>
   ) 

};

export default LoginPage;
