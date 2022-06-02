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
//import "../usersStye.css";
import Swal from "sweetalert2";
import ResponsiveSupervisorHome from "../appBar/ResponsiveSupervisorHome";
//import ResponsiveAdminHome from "../../../appBar/ResponsiveAdminHome";

function Status() {
  const navigate = useNavigate();

  const [acceptedTopics, setAcceptedTopics] = useState([]);
  const [noData, setNodata] = useState(false);

  const [rejectedTopics, setRejectedTopics] = useState([]);

  //   const loadAcceptedTopics = () => {
  //     axios
  //       .get("http://localhost:5000/rpmt/acceptedTopics/")
  //       .then((res) => {
  //         setAcceptedTopics(res.data);
  //         console.log(res);
  //         if (res.data.length == 0) {
  //           setNodata(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  useEffect(() => {
    function getAcceptedTopics() {
      axios
        .get("http://localhost:5000/rpmt/acceptedTopics")
        .then((res) => {
          setAcceptedTopics(res.data);
          console.log(res);
          if (res.data.length == 0) {
            setNodata(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAcceptedTopics();
  }, []);

  //   const loadRejectedTopics = () => {
  //     axios
  //       .get("http://localhost:5000/rpmt/rejectedTopic/")
  //       .then((res) => {
  //         setRejectedTopics(res.data);
  //         console.log(res);
  //         if (res.data.length == 0) {
  //           setNodata(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  useEffect(() => {
    function getRejectedTopics() {
      axios
        .get("http://localhost:5000/rpmt/rejectedTopics")
        .then((res) => {
          setRejectedTopics(res.data);
          console.log(res);
          if (res.data.length == 0) {
            setNodata(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getRejectedTopics();
  }, []);

  return (
    <div>
      <ResponsiveSupervisorHome />
      <Container sx={{ mt: 15, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Accepted Topic Details
        </Typography>

        <Card sx={{ m: 5, p: 2 }} raised>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Student ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Group ID</TableCell>
                    <TableCell align="center">Faculty</TableCell>
                    <TableCell align="center">Department</TableCell>
                    <TableCell align="center">Research Field</TableCell>
                    <TableCell align="center">Topic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {acceptedTopics.map((acceptedTopic, key) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        {acceptedTopic.studentId}
                      </TableCell>
                      <TableCell align="left">{acceptedTopic.name}</TableCell>
                      <TableCell align="left">
                        {acceptedTopic.groupId}
                      </TableCell>
                      <TableCell align="left">
                        {acceptedTopic.faculty}
                      </TableCell>
                      <TableCell align="left">
                        {acceptedTopic.department}
                      </TableCell>
                      <TableCell align="left">
                        {acceptedTopic.researchField}
                      </TableCell>
                      <TableCell align="left">{acceptedTopic.topic}</TableCell>

                      <TableCell align="left">
                        {acceptedTopic.specialization}
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

      <Container sx={{ mt: 15, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Rejected Topic Details
        </Typography>

        <Card sx={{ m: 5, p: 2 }} raised>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Student ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Group ID</TableCell>
                    <TableCell align="center">Faculty</TableCell>
                    <TableCell align="center">Department</TableCell>
                    <TableCell align="center">Research Field</TableCell>
                    <TableCell align="center">Topic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rejectedTopics.map((rejectedTopic, key) => (
                    <TableRow
                      key={key}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">
                        {rejectedTopic.studentId}
                      </TableCell>
                      <TableCell align="left">{rejectedTopic.name}</TableCell>
                      <TableCell align="left">
                        {rejectedTopic.groupId}
                      </TableCell>
                      <TableCell align="left">
                        {rejectedTopic.faculty}
                      </TableCell>
                      <TableCell align="left">
                        {rejectedTopic.department}
                      </TableCell>
                      <TableCell align="left">
                        {rejectedTopic.researchField}
                      </TableCell>
                      <TableCell align="left">{rejectedTopic.topic}</TableCell>

                      <TableCell align="left">
                        {rejectedTopic.specialization}
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
export default Status;
