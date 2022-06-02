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
import ResponsiveStudentHome from "../appBar/ResponsiveAppBarStudentHome";

export default function ViewGroup() {
  const navigate = useNavigate();

  const [group, setGroup] = useState([]);
  const [open, setOpen] = useState(false);
  const [groupId, setGroupId] = useState("");

  const addGroup = () => {
    navigate("/student/addGroup");
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setGroupId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteGroup = (id) => {
    setOpen(false);
    axios.delete("http://localhost:5000/rpmt/group/delete/" + id).then(() => {
      window.location.reload(false);
    });
  };
  useEffect(() => {
    function getGroup() {
      axios.get("http://localhost:5000/rpmt/group/").then((res) => {
        setGroup(res.data);
      });
    }
    getGroup();
  }, []);
  return (
    <div>
      <ResponsiveStudentHome />
      <Container maxWidth="lg" sx={{ mt: 15, p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={addGroup}
                startIcon={<AddIcon />}
              >
                Add Group
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
                  View Groups
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Group ID</TableCell>
                        <TableCell>Leader</TableCell>
                        <TableCell align="right">Member 1</TableCell>
                        <TableCell align="right">Member 2</TableCell>
                        <TableCell align="right">Member 3</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {group.map((group, key) => (
                        <TableRow key={key}>
                          <TableCell component="th" scope="row">
                            {group.groupID}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {group.leader}
                          </TableCell>
                          <TableCell align="right">{group.member1}</TableCell>
                          <TableCell align="right">{group.member2}</TableCell>
                          <TableCell align="right">{group.member3}</TableCell>

                          <TableCell align="right">
                            <Link to={"update/" + group._id}>
                              <IconButton aria-label="edit">
                                <EditIcon />
                              </IconButton>
                            </Link>
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleClickOpen(group._id)}
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
        <DialogTitle id="form-dialog-title">Delete Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deleteGroup(groupId)} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
