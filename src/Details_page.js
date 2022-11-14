import React, { useState } from "react";
import { Box, Button, TextField, Typography, ButtonGroup } from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const Navigate = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    phone: "",
    blessing: "",
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
      <Navbar />
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
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>עיברית</Button>
          <Button>English</Button>
        </ButtonGroup>
      </Box>
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
          <Typography variant="h2" padding={3} textAlign="center">
            Eazy Gift
          </Typography>
          <Typography variant="h4" padding={3} textAlign="center">
            Johnny and Lily's wedding
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
              name="name"
              value={inputs.name}
              id="outlined-basic"
              label="name"
              variant="outlined"
              margin="normal"
            />
          </Box>

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
              name="phone"
              value={inputs.phone}
              id="outlined-basic"
              label="phone"
              variant="outlined"
              margin="normal"
            />
          </Box>

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
              name="blessing"
              value={inputs.blessing}
              id="outlined-basic"
              label="blessing"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
          <Button
            sx={{ marginTop: 2, marginBottom: 2, borderRadius: 2 }}
            size="small"
          >
            List of written blessing
          </Button>

          <Button
            onClick={ () => {(Navigate("/Payment")) }}
            sx={{ marginBottom: 2, borderRadius: 3 }}
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

export default Details;
