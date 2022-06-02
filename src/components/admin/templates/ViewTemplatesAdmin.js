import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ResponsiveAdminHome from "../../appBar/ResponsiveAdminHome";

function ViewTemplates() {
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);
  const [open, setOpen] = useState(false);
  const [templateId, setTemplateId] = useState("");

  const addTemplates = () => {
    navigate("/addTemplate");
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setTemplateId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTemplate = (id) => {
    setOpen(false);
    axios
      .delete("http://localhost:5000/rpmt/templates/delete/" + id)
      .then(() => {
        getAllTemplates();
      });
  };
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

  function getAllTemplates() {
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
  return (
    <div>
      <ResponsiveAdminHome />
      <Container sx={{ mt: 15, p: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Templates and Documents for Researches - Admin
        </Typography>
        <Grid justifyContent="flex-start">
          <Button variant="contained" onClick={addTemplates}>
            Add Template/Document
          </Button>
        </Grid>

        {templates.map((template, key) => (
          <Card sx={{ maxWidth: 800, m: 5, p: 2 }} key={key} raised>
            <CardContent>
              <Grid>
                <Stack direction="row">
                  <Grid container justifyContent="flex-start">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      justifyContent="flex-start"
                    >
                      {template.title}
                    </Typography>
                  </Grid>

                  <Grid container justifyContent="flex-end">
                    <Stack direction="row" spacing={5}>
                      <Link to={"update/" + template._id}>
                        <IconButton aria-label="edit" color="warning">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => {
                          handleClickOpen(template._id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Stack>
              </Grid>

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

      {/* Delete Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this Item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              deleteTemplate(templateId);
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ViewTemplates;
