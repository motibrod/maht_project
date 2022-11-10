import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
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
  const resetState = () => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "" });
  };

  console.log(input);
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
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
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
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
          )}
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
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 1, borderRadius: 3 }}>
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
          <Button sx={{ marginTop: 1, borderRadius: 3 }}>
            Log in as a guest
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
