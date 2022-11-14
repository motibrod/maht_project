import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Singup";

const LoginPage = () => {
  const Navigate = useNavigate();
  let [IsLogin, setIsLogin] = useState(true);
  let [IsSignup, setIsSignup] = useState(false);
  const handelchange = (e) => {
    setIsLogin((IsLogin = false));
    setIsSignup((IsSignup = false));
    switch (e.target.name) {
      case "Login":
        setIsLogin(!IsLogin);
        break;
      case "Signup":
        setIsSignup(!IsSignup);
        break;
      case "Guset":
        Navigate("/Details");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <div>
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
            <div>
              <Button
                onClick={handelchange}
                name="Login"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Login
              </Button>

              <Button
                onClick={handelchange}
                name="Signup"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Signup
              </Button>
              <Button
                onClick={handelchange}
                name="Guset"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"
              >
                Guset
              </Button>
              {/* <Button
                onClick={handelchange}
                name="Admin"
                sx={{ margin: 1, borderRadius: 3 }}
                variant="contained"mhbjh
              >
                Admin
              </Button> */}
            </div>
            {IsLogin && <Login />}
            {IsSignup && <Signup />}
          </Box>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
