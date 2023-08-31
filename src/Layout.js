import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import User from "./modules/User/User";
import Dashboard from "./modules/User/Component/Dashboard";
import Services from "./modules/User/Component/Services/Services";
import Profile from "./modules/User/Component/SelfService/Profile";
import Demo from "./modules/User/Demo";
import Team from "./modules/User/Component/SelfService/team";
import Assets from "./modules/User/Component/Asset/asserts";
import { Row, Container, Col } from "react-bootstrap";
import Sidebar from "./modules/User/Sidebar";
import Navbar from "./modules/User/Component/SelfService/Navbar";
export default function Layout() {
  return (
    <>
      <Router>
        <Container fluid>
          <Row>
            <Col lg={2} >
              <Sidebar />
            </Col>

            <Col lg={10}>
              <Row>
                  <Navbar/>
              </Row>
              <Row>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/services" element={<Services />} />
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/team" element={<Team />} />
                <Route path="/assets" element={<Assets />} />
              </Routes>
              </Row>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}
