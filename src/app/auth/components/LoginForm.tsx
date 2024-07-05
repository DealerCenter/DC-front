import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

import Checkbox from "@/common/components/checkbox/Checkbox";
import AppButton from "@/common/components/appButton/AppButton";
import TextInput from "@/common/components/textInput/TextInput";

type Props = {};

const LoginForm = (props: Props) => {
  // This will be used to show a message if the submission is successful
  const [message, setMessage] = useState("Not valid");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
      console.log(formik.values.email);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
  });

  return (
    <Container>
      <StyledForm onSubmit={formik.handleSubmit}>
        <H4Bold>შესვლა</H4Bold>
        <TextInput
          type="email"
          name="email"
          placeholder="john@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div>
          <TextInput
            type="password"
            name="password"
            placeholder="******"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <LabelContainer>
            <StyledLabel>
              <StyledCheckbox />
              დამახსოვრება
            </StyledLabel>
            <StyledLabel>დაგავიწყდა პაროლი?</StyledLabel>
          </LabelContainer>
        </div>
        <AppButton type="filled" text="შესვლა" disabled={false} />
      </StyledForm>
      <div>
        <StyledP>არ ხარ დარეგისტრირებული?</StyledP>
        <AppButton type="outlined" text="რეგისტრაცია" disabled={false} />
      </div>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  background-color: rgba(32, 32, 32, 0.04);
  margin: auto;
  width: 374px;
  min-height: 617px;
  border-radius: 28px;
  padding: 42px 12px 42px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 2rem;

  @media (min-width: 700px) {
    width: 682px;
    padding: 42px 120px 42px 120px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const H4Bold = styled.h4`
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 700;
  align-self: center;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 26.5px;
`;

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin: 8px;
  padding: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;
