import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../admin/loader/Loader";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddGroup() {
  const [loading, setLoading] = useState(false);
  const [leader, setLeader] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [showText, setShowText] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowText(false);
    setLoading(true);
    const newGroup = {
      leader,
      member1,
      member2,
      member3,
    };

    console.log(newGroup);

    axios
      .post("http://localhost:5000/rpmt/group/add/", newGroup)
      .then((res) => {
        console.log(res);
        console.log("Group Added!!");

        setLeader("");
        setMember1("");
        setMember2("");
        setMember3("");
        form.reset();
        setLoading(false);
        setShowText(true);

        setTimeout(() => {
          Swal.fire({
            title: "Group Added Successfully",
            text: "You will be redirected to the home page",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.value) {
              navigate("/student");
            }
          });
        }, 1000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <Container>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br />
            <h2>Add Group Details</h2>
            <br />

            <Grid>
              <form id="form" onSubmit={handleSubmit}>
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Leader Name"
                  variant="outlined"
                  value={leader}
                  required
                  fullWidth
                  onChange={(e) => {
                    setLeader(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Member 1 Name"
                  variant="outlined"
                  value={member1}
                  required
                  fullWidth
                  onChange={(e) => {
                    setMember1(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Member 2 Name"
                  variant="outlined"
                  value={member2}
                  required
                  fullWidth
                  onChange={(e) => {
                    setMember2(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Member 3 Name"
                  variant="outlined"
                  value={member3}
                  required
                  fullWidth
                  onChange={(e) => {
                    setMember3(e.target.value);
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
                  Add Group Details
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

export default AddGroup;
