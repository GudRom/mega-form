import { Button } from "@mui/material";

const PrimaryButton = ({ children, props }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ margin: "10px 0 8px" }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
