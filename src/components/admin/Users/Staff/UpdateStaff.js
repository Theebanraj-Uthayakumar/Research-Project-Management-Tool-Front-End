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
import { useParams } from "react-router-dom";
import ResponsiveAdminSubStaff from "../../../appBar/ResponsiveAdminSubStaff";

function UpdateStaff() {
  const [loading, setLoading] = useState(false);

  const paramID = useParams("");

  const [name, setName] = useState("");
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

    setShowText(false);
    setLoading(true);

    const newStaff = {
      name,
      idNumber,
      faculty,
      department,
      researchInterest,
      type,
    };
    const userID = idNumber;

    axios
      .put("http://localhost:5000/rpmt/staff/update/" + paramID.id, newStaff)
      .then((res) => {
        console.log(res);
        console.log("Staff Member Updated!!");

        setLoading(false);
        setShowText(true);
      })
      .catch((err) => {
        alert(err);
      });

    setName("");
    setID("");
    setFaculty("");
    setDepartment("");
    setType("");
    setresearchInterest("");

    navigate("/admin/staff");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/rpmt/staff/get/" + paramID.id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.staff.name);
        setID(res.data.staff.idNumber);
        setFaculty(res.data.staff.faculty);
        setDepartment(res.data.staff.department);
        setType(res.data.staff.type);
        setresearchInterest(res.data.staff.researchInterest);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ResponsiveAdminSubStaff />
      <Container sx={{ mt: 15 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 4 }}>
            <br></br>
            <h2>Update Staff Member</h2>

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
                    setName(e.target.value);
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

                <Button
                  type="submit"
                  variant="contained"
                  color="warning"
                  disabled={loading}
                >
                  Update Staff Member
                </Button>
                {showText ? (
                  <Typography variant="subtitle1" color="#00e676">
                    Updated
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

export default UpdateStaff;
