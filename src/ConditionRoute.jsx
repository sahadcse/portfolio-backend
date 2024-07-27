import { Navigate } from "react-router-dom";
import { useRegistration } from "./RegistrationProvider";

const ConditionRoute = ({ element }) => {
  const { isRegistrationEnabled } = useRegistration();
  console.log("Condition Route -isRegistrationEnabled", isRegistrationEnabled);
  return isRegistrationEnabled ? element : <Navigate to="/login" />;
};

export default ConditionRoute;
