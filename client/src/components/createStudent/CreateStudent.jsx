import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <>
      <h2>Create Student</h2>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </>
  );
}
