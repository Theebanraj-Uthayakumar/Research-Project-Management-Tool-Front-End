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
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ResponsiveSupervisorHome from "../appBar/ResponsiveSupervisorHome";

export default function ViewResearch() {
  const navigate = useNavigate();

  const [research, setResearch] = useState([]);
  const [open, setOpen] = useState(false);
  const [researchId, setResearchId] = useState("");

  const addResearch = () => {
    navigate("/student/addResearch");
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setResearchId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteResearch = (id) => {
    setOpen(false);
    axios
      .delete("http://localhost:5000/rpmt/research/delete/" + id)
      .then(() => {
        window.location.reload(false);
      });
  };
  useEffect(() => {
    function getResearch() {
      axios
        .get("http://localhost:5000/rpmt/research/")
        .then((res) => {
          setResearch(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getResearch();
  }, []);
  return (
    <div>
      <ResponsiveSupervisorHome />
      <Container maxWidth="lg" sx={{ mt: 15, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={addResearch}
                startIcon={<AddIcon />}
              >
                Add Research
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  View Research
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Topic</TableCell>
                        <TableCell align="right">Group Id</TableCell>
                        <TableCell align="right">Faculty</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {research.map((research, key) => (
                        <TableRow key={key}>
                          <TableCell component="th" scope="row">
                            {research.name}
                          </TableCell>
                          <TableCell align="right">{research.topic}</TableCell>
                          <TableCell align="right">
                            {research.groupID}
                          </TableCell>
                          <TableCell align="right">
                            {research.faculty}
                          </TableCell>

                          <TableCell align="right">
                            <IconButton
                              aria-label="File Download"
                              onClick={() => {
                                window.open(research.document, "_blank");
                              }}
                            >
                              <FileDownloadIcon />
                            </IconButton>
                            <Link to={"update/" + research._id}>
                              <IconButton aria-label="edit">
                                <EditIcon />
                              </IconButton>
                            </Link>
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleClickOpen(research._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Research</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this research?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deleteResearch(researchId)} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
