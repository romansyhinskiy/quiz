import { FcCheckmark, FcCancel } from "react-icons/fc";
import { ValidationRow, ValidationText } from "../styles/formRow.js";

export const ValidationItem = ({ icon, text }) => {
  return (
    <ValidationRow>
      {icon ? <FcCheckmark /> : <FcCancel />}
      <ValidationText>{text}</ValidationText>
    </ValidationRow>
  );
};
