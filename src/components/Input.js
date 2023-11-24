import React from "react";
import { TextField } from "@mui/material";

function Input(props) {
  const dt = props.dt;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.7rem",
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
      }}
    >
      <p>{dt.label}*</p>
      <TextField
        aria-description="hddddddddd"
        placeholder={dt.placeholder}
        id="filled-basic"
        variant="filled"
        required={dt.validate.required}
        disabled={dt.validate.immutable}
        style={{ width: "50%", height: "90%" }}
      />
    </div>
  );
}

export default Input;
