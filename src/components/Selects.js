import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Selects(props) {
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
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Age"
        defaultValue={dt.validate.defaultValue}
        style={{ width: "50%", height: "90%" }}
      >
        {/* <MenuItem value={dt.validate.defaultValue}><em>{dt.validate.defaultValue}</em></MenuItem> */}
        {dt.validate.options.map((opt) => (
          <MenuItem value={opt.value}>{opt.label}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default Selects;
