import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function StudentHome01() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
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
              navigate("/student/addResearch");
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
                Research
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            onClick={() => {
              navigate("/student/addGroup");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Group
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            onClick={() => {
              navigate("/viewTemplates");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1594788094620-4579ad50c7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Template
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 345,
              mr: 3,
              maxWidth: 345,
              minHeight: 270,
              marginTop: 5,
            }}
            onClick={() => {
              navigate("/topicRegister");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Topics
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 345,
              mr: 3,
              maxWidth: 345,
              minHeight: 270,
              marginTop: 5,
            }}
            onClick={() => {
              navigate("/status");
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image="https://media.nojoto.com/wallpaper/main/wallpaper-2019-07-30-20-48-52-794238db6145dad1970972789936beff.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Topics Status
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}

export default StudentHome01;
