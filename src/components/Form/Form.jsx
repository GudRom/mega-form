function Form({ children, ...props }) {
  return (
    <form
      noValidate
      {...props}
      style={{
        width: "100%",
        marginTop: "10px",
      }}
    >
      {children}
    </form>
  );
}

export default Form;
