import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import ResponsiveAppBarLogin from "./appBar/ResponsiveAppBarLogin";

function Login() {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = {
      userID,
      password,
    };

    const response = await axios.post(
      "http://localhost:5000/rpmt/users/login",
      loginData
    );

    console.log(response);
    const data = response.data;

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("userID", data.userID);

      if (data.role === "student") {
        navigate("/student");
      } else if (data.role === "supervisor") {
        navigate("/supervisor");
      } else if (data.role === "admin") {
        navigate("/admin-home");
      } else if (data.role === "panel_member") {
        navigate("/panelMember");
      } else {
        console.log("user type err");
      }
    } else if (data.status === "no_user") {
      Swal.fire({
        title: "User does not exists!!",
        text: "Please create an account",
        icon: "error",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setUserID("");
          setPassword("");
        }
      });
    } else {
      Swal.fire({
        title: "Incorrect Password!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setPassword("");
    }
  };

  return (
    <div>
      <ResponsiveAppBarLogin />
      <Container sx={{ mt: 15 }}>
        <center>
          <Card sx={{ minWidth: 400, m: 5, p: 2, maxWidth: 500 }} raised>
            <CardContent>
              <form onSubmit={loginUser}>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1 }}>
                    <PersonIcon fontSize="large" />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="userID"
                      value={userID}
                      label="Student ID or Staff ID or Admin ID"
                      name="userID"
                      autoFocus
                      onChange={(e) => {
                        setUserID(e.target.value);
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={password}
                      name="password"
                      label="Password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      {/* <Grid item xs justifyContent="flex-start"> */}
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={2}
                        sx={{ mx: 10 }}
                      >
                        <Link href="registerStudent" variant="body2">
                          Register as a Student
                        </Link>
                        {/* </Grid> */}
                        {/* <Grid item> */}
                        <Link href="registerStaff" variant="body2">
                          Register as a Staff
                        </Link>
                        {/* </Grid> */}
                      </Stack>
                    </Grid>
                  </Box>
                </Box>

                <br />
                <br />

                <div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {"Copyright © "}
                    {new Date().getFullYear()}
                    {"."}
                  </Typography>
                </div>
              </form>
            </CardContent>
          </Card>
        </center>
      </Container>
    </div>
  );
}

export default Login;
