import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import ResponsiveAdminHome from "../../../appBar/ResponsiveAdminHome";

function ViewStaff() {
  const navigate = useNavigate();

  const [staff, setStaff] = useState([]);
  const [noData, setNodata] = useState(false);

  const register = () => {
    navigate("/registerStaff");
  };

  const deletestaff = async (id, idNumber) => {
    await axios
      .delete("http://localhost:5000/rpmt/staff/delete/" + id)
      .then((res) => {
        console.log(res);
      });

    await axios
      .delete("http://localhost:5000/rpmt/users/deleteByUserID/" + idNumber)
      .then((res) => {
        console.log(res);
      });
    loadStaffData();
  };

  const loadStaffData = () => {
    axios
      .get("http://localhost:5000/rpmt/staff/")
      .then((res) => {
        setStaff(res.data);
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
    function getStaff() {
      axios
        .get("http://localhost:5000/rpmt/staff/")
        .then((res) => {
          setStaff(res.data);
          console.log(res);
          if (res.data.length == 0) {
            setNodata(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getStaff();
  }, []);
  return (
    <div>
      <ResponsiveAdminHome />
      <Container sx={{ mt: 15, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Registered Staff Members Details
        </Typography>
        <Grid justifyContent="flex-start">
          <Button variant="contained" onClick={register}>
            Register Staff Member
          </Button>
        </Grid>
        <Card sx={{ m: 5, p: 2 }} raised>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">ID Number </TableCell>
                    <TableCell align="center">Department </TableCell>
                    <TableCell align="center">Faculty </TableCell>
                    <TableCell align="center">Research_Interest</TableCell>
                    <TableCell align="center">User Type</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {staff.map((staff, key) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{staff.name}</TableCell>
                      <TableCell align="left">{staff.idNumber}</TableCell>
                      <TableCell align="left">{staff.department}</TableCell>
                      <TableCell align="left">{staff.faculty}</TableCell>

                      <TableCell align="left">
                        {staff.researchInterest}
                      </TableCell>

                      <TableCell align="left">{staff.type}</TableCell>
                      <TableCell align="left">
                        <Link to={"update/" + staff._id} className="edit">
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
                                deletestaff(staff._id, staff.idNumber);
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
            </TableContainer>
            <center>{noData ? <p>No Data </p> : null}</center>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default ViewStaff;
