import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ResponsiveAppBarRegister from "../../../appBar/ResponsiveAppBarRegister";

function RegisterStaff() {
  const [loading, setLoading] = useState(false);

  const [name, setSetName] = useState("");
  const [idNumber, setID] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [researchInterest, setresearchInterest] = useState("");

  const [showText, setShowText] = useState(false);
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  //methods

  const handleChangeFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleChangeUserType = (event) => {
    setType(event.target.value);
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setShowText(false);
      setLoading(true);

      const newStudent = {
        name,
        idNumber,
        faculty,
        department,
        researchInterest,
        type,
      };
      const userID = idNumber;
      const newLogin = {
        userID,
        password,
        role,
      };

      axios
        .post(
          "http://localhost:5000/rpmt/staff/registerStaffMember",
          newStudent
        )
        .then((res) => {
          console.log(res);
          console.log("Staff Member Added!!");

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
          console.log("Staff Login Added!!");

          setLoading(false);
          setShowText(true);
        })
        .catch((err) => {
          alert(err);
        });

      Swal.fire("Registration Succesfull!", "Click ok to Continue", "success");

      navigate("/");

      setSetName("");
      setID("");
      setFaculty("");
      setDepartment("");
      setPassword("");
      setType("");
      setresearchInterest("");
    } else {
      Swal.fire({
        title: "Incorrect Password!!",
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
            <h2>Staff Registration</h2>

            <Grid>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                id="form"
              >
                <Grid item md={6}></Grid>
                <TextField
                  id="outlined-basic"
                  label="Staff Member Name"
                  variant="outlined"
                  value={name}
                  required
                  fullWidth
                  onChange={(e) => {
                    setSetName(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Staff Member ID"
                  value={idNumber}
                  required
                  fullWidth
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                />
                <br />
                <br />
                <FormControl sx={{ width: 300, minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Faculty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={faculty}
                    label="Age"
                    onChange={handleChangeFaculty}
                    required
                  >
                    <MenuItem value={"Faculty of Computing"}>
                      Faculty of Computing
                    </MenuItem>
                    <MenuItem value={"Faculty of Engineering"}>
                      Faculty of Engineering
                    </MenuItem>
                    <MenuItem value={"Faculty of Health and Science"}>
                      Faculty of Health and Science
                    </MenuItem>
                    <MenuItem value={"Faculty of Buisness"}>
                      Faculty of Buisness
                    </MenuItem>
                  </Select>
                </FormControl>

                <br />
                <br />
                <FormControl sx={{ width: 300, minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select Department
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={department}
                    label="Age"
                    onChange={handleDepartment}
                    required
                  >
                    <MenuItem
                      value={"Computer Science and Software Engineering"}
                    >
                      Computer Science and Software Engineering
                    </MenuItem>
                    <MenuItem value={"Data Science"}>Data Science</MenuItem>
                    <MenuItem value={"Interactive Media"}>
                      Interactive Media
                    </MenuItem>
                    <MenuItem value={"Information Technology"}>
                      Information Technology
                    </MenuItem>
                    <MenuItem value={"Civil Engineeringy"}>
                      Civil Engineeringy
                    </MenuItem>
                    <MenuItem value={"Electrical & Electronic Engineeringy"}>
                      Electrical & Electronic Engineeringy
                    </MenuItem>
                    <MenuItem value={"Buisness"}>Buisness</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <br />
                <FormControl sx={{ width: 300, minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={type}
                    label="Age"
                    onChange={handleChangeUserType}
                    required
                    defaultValue={"supervisor"}
                  >
                    <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                    <MenuItem value={"panel_member"}>Panel Member</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <br />
                <TextField
                  variant="outlined"
                  label="Research Interest"
                  value={researchInterest}
                  required
                  fullWidth
                  onChange={(e) => {
                    setresearchInterest(e.target.value);
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
              </form>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default RegisterStaff;
