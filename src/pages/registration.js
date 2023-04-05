import { useState } from "react";
import { FormRow } from "../components/formRow.js";
import { ValidationWrapper } from "../components/validation.js";
import {
  Header,
  Wrapper,
  StyledForm,
  Row,
  StyledButton,
} from "../styles/registration.js";

const initailState = {
  email: "",
  password: "",
};
export const Registartion = () => {
  const [values, setValues] = useState(initailState);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <>
      <Header>Registration</Header>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
          {/* email */}
          <Row>
            <FormRow
              name="email"
              type="email"
              labelText="Email"
              value={values.email}
              handleChange={handleChange}
            />
          </Row>
          {/* password */}
          <Row>
            <FormRow
              name="password"
              type="password"
              labelText="Password"
              value={values.password}
              handleChange={handleChange}
            />
            <ValidationWrapper password={values.password} setValid={setValid} />
            <StyledButton type="submit" disabled={!valid}>
              Submit
            </StyledButton>
          </Row>
        </StyledForm>
      </Wrapper>
    </>
  );
};
