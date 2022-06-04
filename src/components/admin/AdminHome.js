import Container from "@mui/material/Container";
import { Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

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
      <Container>
        <div style={{ marginTop: 200, marginBottom: 200 }}>
          <center>
            <h1>Welcome to Admin DashBoard</h1>
          </center>
        </div>
      </Container>
    </div>
  );
}

export default AdminHome;
