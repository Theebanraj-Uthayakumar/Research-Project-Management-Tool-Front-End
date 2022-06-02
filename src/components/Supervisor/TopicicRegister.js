import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ResponsiveStudentHome from "../appBar/ResponsiveAppBarStudentHome";

//import TopicView from /components/Supervisor/TopicView';

function TopicRegister() {
  const [name, setName] = useState("");
  const [studentId, setstudentId] = useState("");
  //const [registerId, setRegisterId] = useState("");
  const [groupId, setGroupID] = useState("");

  const [faculty, setFaculty] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [researchField, setField] = React.useState("");
  const [topic, setTopic] = useState("");

  const handleFaculty = (event) => {
    setFaculty(event.target.value);
    console.log(faculty);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleField = (event) => {
    setField(event.target.value);
  };

  function submitButton(e) {
    //  e.preventDefault();
    console.log("start function");
    const newTopic = {
      name,
      studentId,
      groupId,
      faculty,
      department,
      researchField,
      topic,
    };
    console.log(newTopic);
    axios
      .post("http://localhost:5000/rpmt/topics/registerTopic", newTopic)
      .then((res) => {
        alert("Topic Submitted");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <ResponsiveStudentHome />
      <br />
      <br />
      <br />
      <br />
      <h1 align="center">Topic Register</h1>
      <center>
        <Card sx={{ m: 5, p: 5, width: 500 }} raised>
          <CardContent>
            <center>
              <div className="App">
                <form onSubmit={submitButton}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 2, width: "52ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="name"
                      label="Name"
                      variant="outlined"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="registerNumber"
                      label="Register Number"
                      variant="outlined"
                      onChange={(e) => {
                        setstudentId(e.target.value);
                      }}
                    />

                    <TextField
                      required
                      id="groupId"
                      label="Group Id"
                      variant="outlined"
                      onChange={(e) => {
                        setGroupID(e.target.value);
                      }}
                    />
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <FormControl required fullWidth>
                      <InputLabel id="faculty-select-label">Faculty</InputLabel>
                      <Select
                        labelId="faculty-select-label"
                        id="faculty-select"
                        value={faculty}
                        label="Faculty"
                        onChange={handleFaculty}
                      >
                        <MenuItem value={"Faculty Of Computing"}>
                          Faculty Of Computing
                        </MenuItem>
                        <MenuItem value={"Faculty Of Business"}>
                          Faculty Of Business
                        </MenuItem>
                        <MenuItem value={"Faculty Of Engineering"}>
                          Faculty Of Engineering
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl required fullWidth>
                      <InputLabel id="department-select-label">
                        Department
                      </InputLabel>
                      <Select
                        labelId="department-select-label"
                        id="department-select"
                        value={department}
                        label="Department"
                        onChange={handleDepartment}
                      >
                        <MenuItem
                          value={
                            "Information Technology (SLIIT)- SE/ IT / ISE / CS / CSNE"
                          }
                        >
                          Information Technology (SLIIT)- SE/ IT / ISE / CS /
                          CSNE
                        </MenuItem>
                        <MenuItem value={"Business MAnagement (SLIIT)"}>
                          Business MAnagement (SLIIT)
                        </MenuItem>
                        <MenuItem value={"Business Management (LJMU)"}>
                          Business Management (LJMU)
                        </MenuItem>
                        <MenuItem value={"Engineering (SLIIT)"}>
                          Engineering (SLIIT)
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "52ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <FormControl required fullWidth>
                      <InputLabel id="field-select-label">
                        Research Field
                      </InputLabel>
                      <Select
                        labelId="field-select-label"
                        id="field-select"
                        value={researchField}
                        label="Field"
                        onChange={handleField}
                      >
                        <MenuItem value={"Front-End Develop"}>
                          Front-End Develop
                        </MenuItem>
                        <MenuItem value={"Back-End Develop"}>
                          Back-End Develop
                        </MenuItem>
                        <MenuItem value={"Full-Stack Develop"}>
                          Full-Stack Develop
                        </MenuItem>
                        <MenuItem value={"Mechanical Engineering"}>
                          Mechanical Engineering
                        </MenuItem>
                        <MenuItem value={"Business Achievements"}>
                          Business Achievements
                        </MenuItem>
                        <MenuItem value={"Entrepreneur"}>Entrepreneur</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 2, width: "52ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="topic"
                      label="Topic"
                      variant="outlined"
                      onChange={(e) => {
                        setTopic(e.target.value);
                      }}
                    />
                  </Box>
                  <center>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </center>
                </form>
              </div>
            </center>
          </CardContent>
        </Card>
      </center>
    </div>
  );
}

export default TopicRegister;
