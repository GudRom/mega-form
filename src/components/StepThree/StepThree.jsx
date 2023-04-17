import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import MainContainer from "../MainContainer/MainContainer";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import FileInput from "../FileInput/FileInput";
import { useData } from "../../context/DataContext";

const StepThree = () => {
  const navigante = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    setValues(data);
    navigante("/result");
  };
  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name={"files"} control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default StepThree;
