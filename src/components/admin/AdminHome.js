import Container from "@mui/material/Container";
import { Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ResponsiveAdminHome from "../appBar/ResponsiveAdminHome";

function AdminHome() {
  const navigate = useNavigate();
  const manageUsers = () => {
    navigate("/addTemplate");
  };

  const addTemplates = () => {
    navigate("/admin/templates");
  };
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
                navigate("/admin/students");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/student.png")}
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
                  Manage Students
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View All students, delete users and update student details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* staff */}
          <Card
            sx={{ minWidth: 345, m: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/admin/staff");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/staff.png")}
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
                  Manage Staff Members
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View All staff members, delete staff members and update staff
                  member details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* templates */}
          <Card
            sx={{ minWidth: 345, m: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/admin/templates");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/document.png")}
                  sx={{ width: 120, height: 120 }}
                />
              </center>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#A3A3A3" }}
                >
                  Upload Documents / Templates
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Upload document/presentation templates for students.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* admin */}
          <Card
            sx={{ minWidth: 345, m: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/addAdmin");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/admin.png")}
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
                  Add Admin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add another admin user
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

export default AdminHome;
