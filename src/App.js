import React, { Component } from 'react';
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import styled from "styled-components"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal"
import Footer from "./components/Footer"
import Heading from "./components/Heading"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
      
        <Row>
          <Col span={12}>
            <Heading title="This is the title"/>
          </Col>
        </Row>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
