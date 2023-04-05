import { FormRowInput } from "../styles/formRow.js";

export const FormRow = ({ name, type, labelText, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <FormRowInput
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
