import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../admin/loader/Loader";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";

function AddResearch() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [groupID, setGroupID] = useState("");
  const [faculty, setFaculty] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [showText, setShowText] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setShowText(false);
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
      .post("http://localhost:5000/rpmt/research/add/", formData)
      .then((res) => {
        console.log(res);
        console.log("Research Added!!");

        setName("");
        setTopic("");
        setGroupID("");
        setFaculty("");
        setDocumentName("");
        form.reset();
        setLoading(false);
        setShowText(true);
      })
      .catch((err) => {
        alert(err);
      });

    setTimeout(() => {
      navigate("/student");
    }, 5000);
  };

  return (
    <div>
      <Container>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br />
            <h2>Add Research</h2>
            <br />

            <Grid>
              <form
                id="form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
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
                  id="outlined-basic"
                  label="Topic"
                  variant="outlined"
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
                  id="outlined-basic"
                  label="Group ID"
                  variant="outlined"
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
                  id="outlined-basic"
                  label="Faculty"
                  variant="outlined"
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
                  disabled={loading}
                  style={{ marginTop: "10px" }}
                >
                  Add Research Document
                </Button>
                {showText ? (
                  <Typography variant="subtitle1" color="#00e676">
                    Document Added
                  </Typography>
                ) : null}
                {loading ? <Loader /> : null}
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
