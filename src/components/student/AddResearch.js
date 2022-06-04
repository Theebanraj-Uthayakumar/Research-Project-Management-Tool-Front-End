import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../admin/loader/Loader";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddResearch() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [groupID, setGroupID] = useState("");
  const [faculty, setFaculty] = useState("");
  const [documentName, setDocumentName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("document", documentName);
    formData.append("name", name);
    formData.append("topic", topic);
    formData.append("groupID", groupID);
    formData.append("faculty", faculty);

    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:3000/rpmt/research/add/", formData)
      .then((res) => {
        console.log(res);
        Swal.fire(
          "Registration Succesfull!",
          "Click ok to Continue",
          "success"
        );

        setName("");
        setTopic("");
        setGroupID("");
        setFaculty("");
        setDocumentName("");
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Container style={{ width: 600 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br />
            <h2>Add Research</h2>

            <Grid>
              <form
                id="form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <br />
                <TextField
                  id="filled-hidden-label-normal"
                  label="Name"
                  variant="standard"
                  value={name}
                  required
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="filled-hidden-label-normal"
                  label="Topic"
                  variant="standard"
                  value={topic}
                  required
                  fullWidth
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="filled-hidden-label-normal"
                  label="Group ID"
                  variant="standard"
                  value={groupID}
                  required
                  fullWidth
                  onChange={(e) => {
                    setGroupID(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="filled-hidden-label-normal"
                  label="Faculty"
                  variant="standard"
                  value={faculty}
                  required
                  fullWidth
                  onChange={(e) => {
                    setFaculty(e.target.value);
                  }}
                />
                <br />
                <br />
                <Input
                  type="file"
                  id="file"
                  name="file"
                  onChange={(e) => {
                    setDocumentName(e.target.files[0]);
                  }}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={loading}
                  style={{ marginTop: "10px", background: "#343a40" }}
                >
                  Add Research Document
                </Button>
                <br />
                <br />
              </form>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default AddResearch;
