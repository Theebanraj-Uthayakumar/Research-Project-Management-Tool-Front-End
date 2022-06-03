import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid, Paper } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ResponsiveStudentHome from "../appBar/ResponsiveAppBarStudentHome";
import ResponsiveStudentUpdateResearch from "../appBar/ResponsiveAppBarStudentUpdateResearch";

function StudentHome() {
  const navigate = useNavigate();
  return (
    <div>
      <ResponsiveStudentHome />
      <Container>
        <h1>Student</h1>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ mt: 3, p: 2, ml: 3 }}
        >
          {/* <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("viewResearch");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/researchIcon.png")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#A3A3A3" }}
                >
                  View Research
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View All researches, delete researches and update research
                  details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/student/addResearch");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/addResearch.jpg")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                 <center> Add Research</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/student/addGroup");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/addGroup.png")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                  <center>Add Group</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/student/viewGroup");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/viewGroup.jpg")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                  <center>View Group</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270, mt: 3 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/viewTemplates");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/viewTemplate.png")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                 <center> View Template</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270, mt: 3 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/status");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/viewTopics.webp")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                  <center>View Topics</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              minWidth: 345,
              mr: 3,
              maxWidth: 345,
              minHeight: 270,
              mt: 3,
            }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/topicRegister");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/registerTopic.jpg")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent style={{background: "#343a40" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#fff" }}
                >
                <center>  Register Topic</center>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}

export default StudentHome;
