import ROUTES from "../../routes/routesModel";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const user = true;

    if (user) return <Navigate replace to={ROUTES.CARDS} />;
    return <div>Login Page</div>;

}
 
export default LoginPage;