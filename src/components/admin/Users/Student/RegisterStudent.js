import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ResponsiveAppBarRegister from "../../../appBar/ResponsiveAppBarRegister";

function RegisterStudent() {
  const [loading, setLoading] = useState(false);

  const [name, setStudentName] = useState("");
  const [idNumber, setStudentID] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [password, setPassword] = useState("");
  const [showText, setShowText] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const role = "student";

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setShowText(false);
      setLoading(true);

      const newStudent = {
        name,
        idNumber,
        degree,
        specialization,
        password,
      };
      const userID = idNumber;
      const newLogin = {
        userID,
        password,
        role,
      };

      axios
        .post("http://localhost:5000/rpmt/students/registerStudent", newStudent)
        .then((res) => {
          console.log(res);
          console.log("Student Added!!");

          setLoading(false);
          setShowText(true);
        })
        .catch((err) => {
          alert(err);
        });

      axios
        .post("http://localhost:5000/rpmt/users/add/", newLogin)
        .then((res) => {
          console.log(res);
          console.log("Student Login Added!!");

          setLoading(false);
          setShowText(true);
        })
        .catch((err) => {
          alert(err);
        });

      Swal.fire("Registration Succesfull!", "Click ok to Continue", "success");

      navigate("/");

      setStudentName("");
      setStudentID("");
      setDegree("");
      setSpecialization("");
      setPassword("");
    } else {
      Swal.fire({
        title: "Passowrds Not Matched!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <ResponsiveAppBarRegister />
      <Container sx={{ mt: 15 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 4 }}>
            <br></br>
            <h2>Student Registration</h2>

            <Grid>
              <form onSubmit={handleSubmit} id="form">
                <Grid item md={6}></Grid>
                <Box sx={{ pl: 5, pr: 5 }}>
                  <TextField
                    id="outlined-basic"
                    label="Student Name"
                    variant="outlined"
                    value={name}
                    required
                    fullWidth
                    onChange={(e) => {
                      setStudentName(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    label="Student ID"
                    value={idNumber}
                    required
                    fullWidth
                    onChange={(e) => {
                      setStudentID(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    label="Degree"
                    value={degree}
                    required
                    fullWidth
                    onChange={(e) => {
                      setDegree(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    label="Specialization"
                    value={specialization}
                    required
                    fullWidth
                    onChange={(e) => {
                      setSpecialization(e.target.value);
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

export default RegisterStudent;
