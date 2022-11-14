import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handelchange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(input);
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>

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
            onClick={ () => {(Navigate("/Details")) }}
            sx={{ margin: 3, borderRadius: 3 }}
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
