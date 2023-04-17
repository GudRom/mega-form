import { Typography } from "@mui/material";
import MainContainer from "../MainContainer/MainContainer";
import Form from "../Form/Form";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain number")
    .required("First name is a required"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain number")
    .required("Last name is a required"),
});

const StepOne = () => {
  const navigante = useNavigate();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    navigante("/step-two");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default StepOne;
