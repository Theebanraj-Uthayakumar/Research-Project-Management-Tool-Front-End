import Container from "@mui/material/Container";
import { Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function SupervisorHome() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <center>
          <h1>Welcome to Supervisor Dashboard</h1>
        </center>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ mt: 3, p: 2, ml: 3 }}
        >
          <Card
            sx={{
              minWidth: 345,
              mr: 3,
              maxWidth: 345,
              minHeight: 270,
            }}
            onClick={() => {
              navigate("/topicView");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1588618319344-424aa94f749e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Registered Topics
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 345,
              mr: 3,
              maxWidth: 345,
              minHeight: 270,
            }}
            onClick={() => {
              navigate("/student/viewResearch");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                View Research
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default SupervisorHome;
