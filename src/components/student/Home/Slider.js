import React from "react";
import Container from "@mui/material/Container";
import { Row, Col } from "react-bootstrap";

function Slider() {
  return (
    <div>
      <div style={{ backgroundColor: "#082c6c " }}>
        <Container style={{ height: "800px" }}>
          <Row>
            <Col>
              <h1
                style={{
                  fontSize: "100px",
                  fontFamily: "Poppins",

                  paddingTop: "200px",
                  color: "white",
                }}
              >
                Welcome to MIT
              </h1>
              <h2
                style={{
                  fontSize: "25px",
                  color: "white",
                  paddingBottom: "20px",
                }}
              >
                {" "}
                We are a leading non-state degree awarding institute approved by
                the University Grants Commission (UGC) under the Universities
                Act. We are also members of the Association of Commonwealth
                Universities (ACU), as well as the International Association of
                Universities (IAU), and the first Sri Lankan institute to be
                accredited by the Institution of Engineering & Technology, UK.
              </h2>
            </Col>
            <Col xs lg="4" style={{ marginTop: "300px" }}>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Slider;
