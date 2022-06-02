import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveStudentHome from "../../appBar/ResponsiveAppBarStudentHome";

function ViewTemplates() {
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    function getTemplates() {
      axios
        .get("http://localhost:5000/rpmt/templates/")
        .then((res) => {
          setTemplates(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTemplates();
  }, []);
  return (
    <div>
      <ResponsiveStudentHome />
      <Container sx={{ mt: 10, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Templates and Documents for Researches
        </Typography>
        {templates.map((template, key) => (
          <Card sx={{ maxWidth: 800, m: 5, p: 2 }} key={key} raised>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {template.title}
              </Typography>
              <Typography variant="body2">
                <b>Uploaded On : </b>
                {Date(template.postedDate)}
              </Typography>
              <br />

              <Typography
                variant="body2"
                color="text.secondary"
                align="justify"
              >
                {template.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                style={{
                  color: "#455a64",
                }}
                onClick={() => {
                  window.open(template.templateDocument);
                }}
              >
                <img src={require("./icons/presentation.png")} width="50"></img>
                Download
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default ViewTemplates;
