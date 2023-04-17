import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import MainContainer from "../MainContainer/MainContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import * as yup from "yup";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "../../context/DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

const StepTwo = () => {
  const navigante = useNavigate();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    setValues(data);
    navigante("/step-three");
  };
  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              {...register("hasPhone")}
              color="primary"
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
            />
          }
          label="Do you have a phone?"
        />
        {hasPhone ? (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={(evt) => {
              evt.target.value = normalizePhoneNumber(evt.target.value);
            }}
          />
        ) : null}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default StepTwo;
