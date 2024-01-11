import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForms";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import loginSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const SignupPage = () => {
  const { handleSignup } = useUsers();
  const { value, ...rest } = useForm(
    initialSignupForm,
    loginSchema,
    handleSignup
  );

  const { user } = useUser();

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <>
      <PageHeader
        title="Signup Page"
        subtitle='In order to register, please fill in the form below with your personal information and click on the "Sign Up" button.'
      ></PageHeader>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          onSubmit={rest.onSubmit}
          onChange={rest.validateForm}
          onReset={rest.handleReset}
          styles={{ maxWidth: "800px" }}
          title="register"
          to={ROUTES.CARDS}
        >
          <Input
            name="first"
            label="first name"
            error={value.errors.first}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="middle"
            label="middle name"
            error={value.errors.middle}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
            required={false}
          />
          <Input
            name="last"
            label="last name"
            error={value.errors.last}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="phone"
            label="phone"
            type="phone"
            error={value.errors.phone}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="email"
            label="email"
            type="email"
            error={value.errors.email}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="password"
            label="password"
            type="password"
            error={value.errors.password}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="url"
            label="image url"
            error={value.errors.url}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
            required={false}
          />
          <Input
            name="alt"
            label="image alt"
            error={value.errors.alt}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
            required={false}
          />
          <Input
            name="state"
            label="state"
            error={value.errors.state}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
            required={false}
          />
          <Input
            label="country"
            name="country"
            error={value.errors.country}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="city"
            label="city"
            error={value.errors.city}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="street"
            label="street"
            error={value.errors.street}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="houseNumber"
            label="house Number"
            type="number"
            error={value.errors.houseNumber}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
          />
          <Input
            name="zip"
            label="zip"
            error={value.errors.zip}
            onChange={rest.handleChange}
            data={value.data}
            sm={6}
            required={false}
          />
          <Grid item>
            <FormControlLabel
              onChange={(e) =>
                rest.setData({ ...value.data, isBusiness: !!e.target.checked })
              }
              name="isBusiness"
              control={
                <Checkbox value={value.data.isBusiness} color="primary" />
              }
              label="Signup as business"
            ></FormControlLabel>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default SignupPage;
