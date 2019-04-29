import React, { Component } from 'react';
import { Row, Col } from "react-simple-flex-grid"
import "react-simple-flex-grid/lib/main.css"
import styled from "styled-components"
import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Modal from "./components/Modal"
import CookiePopup from "./components/CookiePopup"
import Input from "./components/Input"

const Placeholder = styled.div`
  height: 50px;
`

class App extends Component {
  state = {
    showModal: false,
    showCookiePopup: true
  }

  handleModal = () => {
    this.setState(prevState => { 
      return {
        showModal: !prevState.showModal
      }
    })
  } 

  handleCookiePopup = () => {
    this.setState(prevState => { 
      return {
        showCookiePopup: !prevState.showCookiePopup
      }
    })
  } 
  render() {
    return (
      <React.Fragment>
        <Navbar/>

        <Row>
          <Col span={10} offset={1}>
            <Heading title="This is the title"/>
          </Col>
          
          { /* offset = spacing to center */ } 
          <Col span={8} offset={2}>

          <Button 
            title="Show the Modal"
            function={this.handleModal}
          />

          <Modal 
            show={this.state.showModal}
            function={this.handleModal}
          />

          </Col>
    
        </Row>
        <CookiePopup
          show={this.state.showCookiePopup}
          function={this.handleCookiePopup}
        />

        <Input />
        
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
