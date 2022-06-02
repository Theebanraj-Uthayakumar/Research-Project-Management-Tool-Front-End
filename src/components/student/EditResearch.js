import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../admin/loader/Loader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ResponsiveStudentUpdateResearch from "../appBar/ResponsiveAppBarStudentUpdateResearch";

function EditResearch() {
  const paramID = useParams("");
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [groupID, setGroupID] = useState("");
  const [faculty, setFaculty] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [showText, setShowText] = useState(false);
  const [currentResearch, setCurrentResearch] = useState({});

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
      .put("http://localhost:5000/rpmt/research/update/" + paramID.id, formData)
      .then((res) => {
        console.log(res);
        console.log("Research Updated!!");

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
      navigate("/student/viewResearch");
    }, 5000);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/rpmt/research/get/" + paramID.id)
      .then((res) => {
        setCurrentResearch(res.data);
        console.log(res);
        setName(res.data.research.name);
        setTopic(res.data.research.topic);
        setGroupID(res.data.research.groupID);
        setFaculty(res.data.research.faculty);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <ResponsiveStudentUpdateResearch />
      <Container sx={{ mt: 15 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br />
            <h2>Edit Research</h2>
            <br />

            <Grid>
              <form
                id="form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <Grid item md={6}>
                  <br />
                  <br />
                </Grid>
                <TextField
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
                <input
                  type="file"
                  name="document"
                  onChange={(e) => {
                    setDocumentName(e.target.files[0]);
                  }}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  type="warning"
                  disabled={loading}
                >
                  Update Research
                </Button>
                {showText ? (
                  <Typography variant="h6" color="primary">
                    Research Updated Successfully
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

export default EditResearch;
