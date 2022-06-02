import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../usersStye.css";
import Swal from "sweetalert2";
import ResponsiveAdminHome from "../../../appBar/ResponsiveAdminHome";

function ViewStudents() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [noData, setNodata] = useState(false);

  const register = () => {
    navigate("/registerStudent");
  };

  const deleteStudent = async (id, idNumber) => {
    await axios
      .delete("http://localhost:5000/rpmt/students/delete/" + id)
      .then((res) => {
        console.log(res);
      });

    await axios
      .delete("http://localhost:5000/rpmt/users/deleteByUserID/" + idNumber)
      .then((res) => {
        console.log(res);
      });
    loadStudent();
  };

  const loadStudent = () => {
    axios
      .get("http://localhost:5000/rpmt/students/")
      .then((res) => {
        setStudents(res.data);
        console.log(res);
        if (res.data.length == 0) {
          setNodata(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/rpmt/students/")
        .then((res) => {
          setStudents(res.data);
          console.log(res);
          if (res.data.length == 0) {
            setNodata(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStudents();
  }, []);
  return (
    <div>
      <ResponsiveAdminHome />
      <Container sx={{ mt: 15, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Registered Student Details
        </Typography>
        <Grid justifyContent="flex-start">
          <Button variant="contained" onClick={register}>
            Register Student
          </Button>
        </Grid>
        <Card sx={{ m: 5, p: 2 }} raised>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Student ID</TableCell>
                    <TableCell align="center">name</TableCell>
                    <TableCell align="center">Degree</TableCell>
                    <TableCell align="center">Specilization</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student, key) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{student.idNumber}</TableCell>
                      <TableCell align="left">{student.name}</TableCell>
                      <TableCell align="left">{student.degree}</TableCell>

                      <TableCell align="left">
                        {student.specialization}
                      </TableCell>
                      <TableCell align="left">
                        <Link to={"update/" + student._id} className="edit">
                          <Button variant="contained" color="warning">
                            Update
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            Swal.fire({
                              title: "Warning!",
                              text: "Do you want to delete the user?",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonText: "Ok",
                              confirmButtonColor: "#C81E1E",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                deleteStudent(student._id, student.idNumber);
                              } else {
                              }
                            });
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <center>{noData ? <p>No Data </p> : null}</center>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default ViewStudents;
