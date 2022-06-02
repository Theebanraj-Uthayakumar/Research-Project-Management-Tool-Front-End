import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffects, useState } from "react";
import { container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, Paper } from "@mui/material";
import ResponsiveSupervisorHome from "../appBar/ResponsiveSupervisorHome";

function viewTopics() {
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);

  React.useEffect(() => {
    function getTopics() {
      axios
        .get("http://localhost:5000/rpmt/topics/")
        .then((res) => {
          setTopics(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTopics();
  }, []);
  function getAllTopics() {
    axios
      .get("http://localhost:5000/rpmt/topics/")
      .then((res) => {
        setTopics(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function acceptButton(topic) {
    console.log("start Accepting");
    // const newAccept = {
    //   name,
    //   studentId,
    //   groupId,
    //   faculty,
    //   department,
    //   researchField,
    //   topic,
    // };
    console.log(topic);
    axios
      .post("http://localhost:5000/rpmt/acceptedTopics/add", topic)
      .then((res) => {
        alert("Topic Accepted");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete("http://localhost:5000/rpmt/topics/delete/" + topic._id)
      .then((res) => {
        // alert("Topic Deleted");
        getAllTopics();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function rejectButton(topic) {
    console.log("Start Rejecting");
    console.log(topic);
    axios
      .post("http://localhost:5000/rpmt/rejectedTopics/add", topic)
      .then((res) => {
        // alert("Topic Rejected");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete("http://localhost:5000/rpmt/topics/delete/" + topic._id)
      .then((res) => {
        alert("Topic Deleted");
        getAllTopics();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <ResponsiveSupervisorHome />
      <br></br>
      <br></br>
      <br></br>
      <center>
        <h1>Registered Topics</h1>
      </center>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={10}
        sx={{ mt: 3, p: 3, ml: 3 }}
      >
        {topics.map((topic, key) => (
          <Card
            sx={{ width: 500, height: 400, mx: 2, my: 3 }}
            style={{ backgroundColor: "#FFE0B2" }}
            elevation={3}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Register No : {topic.studentId}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Name : {topic.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Group ID : {topic.groupId}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Faculty : {topic.faculty}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Department : {topic.department}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Research Field : {topic.researchField}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Topic : {topic.topic}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={() => {
                  acceptButton(topic);
                }}
              >
                Accept
              </Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => {
                  rejectButton(topic);
                }}
              >
                Reject
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
export default viewTopics;
