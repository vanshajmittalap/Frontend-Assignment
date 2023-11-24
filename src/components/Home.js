import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Input from "./Input";
import Switch from "./Switch";
import Selects from "./Selects";
import Radio from "./Radio";

function Home() {
  let myJSON = [];
  const [data, setData] = React.useState([]);

  function ConfigJSONReady(event) {
    myJSON = document.getElementById("myJSONField").value;
    myJSON = JSON.parse(myJSON);
    setData(myJSON);
    console.log(myJSON);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          width: "45%",
          gap: "1rem",
          marginLeft: "1rem",
        }}
      >
        <textarea
          rows="40"
          cols="90"
          id="myJSONField"
          defaultValue='Paste/Enter Your JSON'
          style={{ backgroundColor: "black", color: "orangered" }}
        ></textarea>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="success"
            name="DDFConfigJSONReady"
            id="DDFConfigJSONReady"
            onClick={ConfigJSONReady}
          >
            Submit
          </Button>
        </Stack>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          width: "52%",
          gap: "1rem",
          color: "black",
        }}
      >
        {data.length > 0 &&
          data.map((dt) => (
            <div>
              {dt.uiType === "Input" && <Input dt={dt} />}
              {dt.uiType === "Select" && <Selects dt={dt} />}
              {dt.uiType === "Radio" && <Radio dt={dt} />}
              {dt.uiType === "Switch" && <Switch dt={dt} />}
              {dt.uiType === "Group" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.7rem",
                    backgroundColor: "whitesmoke",
                    borderRadius: "20px",
                  }}
                >
                  {dt.label}
                  {dt.subParameters.length > 0 &&
                    dt.subParameters.map((d) => (
                      <div
                        style={{
                          backgroundColor: "whitesmoke",
                          borderBlockColor: "black",
                          borderBlockWidth: "20px",
                        }}
                      >
                        {d.uiType === "Input" && <Switch dt={d} />}
                        {d.uiType === "Select" && <Selects dt={d} />}
                        {d.uiType === "Radio" && <Radio dt={d} />}
                        {d.uiType === "Switch" && <Switch dt={d} />}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        {data.length>0 && (<Stack spacing={2} direction="row" justifyContent="end">
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Submit</Button>
        </Stack>)}
      </div>
    </div>
  );
}

export default Home;
