import { useParams } from "react-router-dom";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../admin/loader/Loader";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ResponsiveStudentHome from "../appBar/ResponsiveAppBarStudentHome";

export default function EditGroup() {
  const paramID = useParams("");
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [leader, setLeader] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [showText, setShowText] = useState(false);
  const [currentGroup, setCurrentGroup] = useState({});

  const handleSubmit = (e) => {
    setShowText(false);
    setLoading(true);
    const groupData = {
      leader,
      member1,
      member2,
      member3,
    };

    console.log(groupData);
    e.preventDefault();

    axios
      .put("http://localhost:5000/rpmt/group/update/" + paramID.id, groupData)
      .then((res) => {
        console.log(res);
        console.log("Group Updated!!");

        setLeader("");
        setMember1("");
        setMember2("");
        setMember3("");
        form.reset();
        setLoading(false);
        setShowText(true);

        setTimeout(() => {
          Swal.fire({
            title: "Group Details Updated Successfully",
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/rpmt/group/get/" + paramID.id)
      .then((res) => {
        console.log(res);
        setCurrentGroup(res.data);
        setLeader(res.data.group.leader);
        setMember1(res.data.group.member1);
        setMember2(res.data.group.member2);
        setMember3(res.data.group.member3);
      });
  }, []);

  return (
    <div>
      <ResponsiveStudentHome />
      <Container sx={{ mt: 15 }}>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br />
            <h2>Edit Group</h2>
            <br />

            <Grid>
              <form id="form" onSubmit={handleSubmit}>
                <Grid item md={6}>
                  <br />
                  <br />
                </Grid>
                <TextField
                  label="Leader"
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
                  type="warning"
                  disabled={loading}
                >
                  Update Group Details
                </Button>
                {showText ? (
                  <Typography variant="h6" color="primary">
                    Group Details Updated Successfully
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
