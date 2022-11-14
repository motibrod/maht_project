import React, { useState } from "react";
import { Box, Button, TextField, Typography, ButtonGroup } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";

const Pay = () => {
  const [inputs, setInput] = useState({
    Amount_to_pay: "",
  });
  const handelchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          "& > *": {
            m: 1,
          },
        }}
      >
        
      </Box>
      <Typography variant="h2" padding={3} textAlign="center" margin="auto" marginTop={5}>
        Eazy Gift
      </Typography>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
              //   "& button": { m: 1 },
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            Payment page
          </Typography>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={handelchange}
              name="Amount to pay"
              value={inputs.name}
              id="outlined-basic"
              label="Amount to pay"
              variant="outlined"
              margin="normal"
            />
          </Box>
          <div>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              <AddCardIcon />
              <input type="file" hidden />
            </Button>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              paypal
              <input type="file" hidden />
            </Button>
            <Button
              sx={{ marginBottom: 2, borderRadius: 3, margin: 1 }}
              variant="contained"
              component="label"
            >
              bit
              <input type="file" hidden />
            </Button>
          </div>

          <Button
            sx={{ marginBottom: 2, borderRadius: 3 , margin: 1 }}
            variant="contained"
            size="large"
          >
            payment
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Pay;