import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Switch(props) {
  const dt = props.dt;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0.7rem",
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
      }}
    >
      <FormControlLabel
        required={dt.validate.required}
        control={<Checkbox />}
        label={dt.label}
      />
    </div>
  );
}

export default Switch;
