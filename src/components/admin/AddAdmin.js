import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./loader/Loader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ResponsiveAdminHome from "../appBar/ResponsiveAdminHome";
function AddAdmin() {
  const [loading, setLoading] = useState(false);

  const [idNumber, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [showText, setShowText] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const role = "admin";

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setShowText(false);
      setLoading(true);

      const userID = idNumber;
      const newLogin = {
        userID,
        password,
        role,
      };

      axios
        .post("http://localhost:5000/rpmt/users/add/", newLogin)
        .then((res) => {
          console.log(res);
          console.log("Admin Login Added!!");

          setLoading(false);
          setShowText(true);
        })
        .catch((err) => {
          alert(err);
        });

      Swal.fire("Admin User Added!!", "Click ok to Continue", "success");

      navigate("/admin-home");

      setAdminID("");
      setPassword("");
    } else {
      Swal.fire({
        title: "Passowrds Not Matched!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      setConfirmPassword("");
    }
  };

  return (
    <div>
      <ResponsiveAdminHome />
      <Container sx={{ mt: 15 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 4 }}>
            <br></br>
            <h2>Add Admin User </h2>

            <Grid>
              <form onSubmit={handleSubmit} id="form">
                <Grid item md={6}></Grid>
                <Box sx={{ pl: 5, pr: 5 }}>
                  <TextField
                    variant="outlined"
                    label="Admin ID"
                    value={idNumber}
                    required
                    fullWidth
                    onChange={(e) => {
                      setAdminID(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={password}
                    required
                    fullWidth
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    required
                    fullWidth
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />

                  <br />
                  <br />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    Register
                  </Button>
                  {showText ? (
                    <Typography variant="subtitle1" color="#00e676">
                      Registered
                    </Typography>
                  ) : null}
                  {loading ? <Loader /> : null}
                  <br />
                  <br />
                </Box>
              </form>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default AddAdmin;
