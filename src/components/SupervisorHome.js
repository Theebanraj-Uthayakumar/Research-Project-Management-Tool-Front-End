import Container from "@mui/material/Container";
import { Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ResponsiveAdminHome from "./appBar/ResponsiveSupervisorHome";

function SupervisorHome() {
  const navigate = useNavigate();

  return (
    <div>
      <ResponsiveAdminHome />
      <Container>
        <h1>Admin Home</h1>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ mt: 3, p: 2, ml: 3 }}
        >
          <Card
            sx={{ minWidth: 345, m: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/topicView");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./admin/images/topics.png")}
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
                  View Registered Topics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View All Registered topics .
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
                navigate("/student/viewResearch");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./admin/images/researchIcon.png")}
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
