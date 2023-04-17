import { TextField } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      {...ref(props.name)}
      {...props}
      fullWidth
    />
  );
});

export default Input;
