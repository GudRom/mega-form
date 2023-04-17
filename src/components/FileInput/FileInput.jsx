import { List, ListItem, ListItemText, Paper } from "@mui/material";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                sx={{
                  backgroundColor: "#eee",
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#333",
                  padding: "10px",
                  marginTop: "20px",
                }}
                variant="outlined"
                {...getRootProps()}
              >
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              );
            })}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;
