import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ResponsiveAdminSubStd from "../../../appBar/ResponsiveAdminSubStd";

function UpdateStudent() {
  const [loading, setLoading] = useState(false);

  const paramID = useParams("");

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

    const newStudent = {
      name,
      idNumber,
      degree,
      specialization,
    };

    axios
      .put(
        "http://localhost:5000/rpmt/students/update/" + paramID.id,
        newStudent
      )
      .then((res) => {
        console.log(res);
        console.log("Student Updated!!");

        setLoading(false);
        setShowText(true);
      })
      .catch((err) => {
        alert(err);
      });

    navigate("/admin/students");

    setStudentName("");
    setStudentID("");
    setDegree("");
    setSpecialization("");
    setPassword("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/rpmt/students/get/" + paramID.id)
      .then((res) => {
        console.log(res.data);
        setStudentName(res.data.student.name);
        setStudentID(res.data.student.idNumber);
        setDegree(res.data.student.degree);
        setSpecialization(res.data.student.specialization);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ResponsiveAdminSubStd />
      <Container>
        <Paper elevation={7}>
          <Box sx={{ m: 4 }}>
            <br></br>
            <h2>Update Student Details</h2>

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

                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    disabled={loading}
                  >
                    Update Student Details
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

export default UpdateStudent;
