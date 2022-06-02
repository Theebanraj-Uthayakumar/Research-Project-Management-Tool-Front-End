import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documentName, setDocumentName] = useState("");

  const addTemplate = (e) => {
    const formData = new FormData();

    formData.append("type", type);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("postedDate", Date.now());
    formData.append("templateDocument", documentName);

    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:5000/rpmt/templates/add/", formData)
      .then((res) => {
        console.log(res);
        console.log("Template Added!!");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form onSubmit={addTemplate} encType="multipart/form-data">
      <center>
        <h1>Upload Template</h1>
        <TextField
          id="outlined-basic"
          label="Type"
          variant="outlined"
          required
          onChange={(e) => {
            setType(e.target.value);
          }}
        />

        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="file"
          filename="templateDocument"
          onChange={(e) => {
            setDocumentName(e.target.files[0]);
          }}
        ></input>

        <Button variant="text" color="primary" type="submit">
          Submit
        </Button>
      </center>
    </form>
  );
}

export default FileUpload;
