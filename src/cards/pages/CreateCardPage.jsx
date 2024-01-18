import useForm from "../../forms/hooks/useForms";
import { useUser } from "../../users/providers/UserProvider";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import CardForm from "../components/CardForm";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness) return <Navigate to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
        <CardForm
            title="create card"
            data={value.data}
            onSubmit={rest.onSubmit}
            onReset={rest.handleReset}
            errors={value.errors}
            onFormChange={rest.validateForm}
            onInputChange={rest.handleChange}
            >
      </CardForm>
    </Container>
  );
};

export default CreateCardPage;
