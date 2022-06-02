import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBarTemplate from "../../appBar/ResponsiveAppBarTemplate";

function AddTemplate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [showText, setShowText] = useState(false);

  const handleSubmit = (e) => {
    setShowText(false);
    setLoading(true);
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("templateDocument", documentName);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("postedDate", Date.now());

    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:5000/rpmt/templates/add/", formData)
      .then((res) => {
        console.log(res);
        console.log("Template Added!!");

        setType("");
        setTitle("");
        setDescription("");
        setDocumentName("");
        form.reset();
        setLoading(false);
        setShowText(true);
        navigate("/admin/templates");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (documentName.type === "application/msword") {
      setType("word");
    } else if (documentName.type === "application/pdf") {
      setType("pdf");
    } else if (
      documentName.type ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    )
      setType("presentation");
    else setType("default");
  }, [documentName]);

  return (
    <div>
      <ResponsiveAppBarTemplate />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br></br>
            <h2>Add Documents/Templates </h2>

            <Grid>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                id="form"
              >
                <Grid item md={6}>
                  {/* <TextField
                    id="outlined-basic"
                    label="Type"
                    variant="outlined"
                    value={type}
                    required
                    fullWidth
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  /> */}
                  <br />
                  <br />
                </Grid>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={title}
                  required
                  fullWidth
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  multiline
                  variant="outlined"
                  label="Description"
                  value={description}
                  required
                  fullWidth
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />
                <Input
                  id="raised-button-file"
                  type="file"
                  color="primary"
                  required
                  onChange={(e) => {
                    setDocumentName(e.target.files[0]);
                  }}
                />
                <br />
                <br />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  Add Template/Document
                </Button>
                {showText ? (
                  <Typography variant="subtitle1" color="#00e676">
                    Details Added
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

export default AddTemplate;
