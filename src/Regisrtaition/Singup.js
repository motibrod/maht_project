import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  console.log(input);
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Signup
          </Typography>

          <TextField
            onChange={handelchange}
            name="name"
            value={input.name}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
            label="Name"
          />

          <TextField
            onChange={handelchange}
            name="email"
            value={input.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            label="Email"
          />

          <TextField
            onChange={handelchange}
            name="password"
            value={input.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
            label="Password"
          />

          <Button
            type="submit"
            sx={{ margin: 3, borderRadius: 3 }}
            variant="contained"
            size="large"
          >
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
