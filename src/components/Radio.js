import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Radio(props) {
  const dt = props.dt;
  const [alignment, setAlignment] = React.useState("web");

  const handlealignmentChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.7rem",
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        defaultValue={dt.validate.defaultValue}
        onChange={handlealignmentChange}
        aria-label="Platform"
      >
        {dt.validate.options.map((opt) => (
          <ToggleButton value={opt.value}>{opt.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default Radio;
