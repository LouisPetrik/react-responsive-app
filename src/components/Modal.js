import React from "react"
import styled from "styled-components"
import Button from "./Button"
// modal
const Wrapper = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
// modal content
const ModalMain = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    max-width: 600px;
    min-width: 350px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: Roboto;
  
`
// modal-header
const ModalHeader = styled.div`
    padding: 2px 10px;
    height: 60px;
    background-color: black;
    color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
// modal-body
const ModalBody = styled.div`
    padding: 2px 16px;
`
// modal-footer
const ModalFooter = styled.div`
    padding: 8px 10px;
    background-color: black;
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const CloseButton = styled.span`
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    :hover {
        color: orange;
    }
`

const ModalButton = styled.span`
    color: black;
    padding: 0.2em 1em;
    background-color: white;
    border-radius: 0.5em;
    font-size: 1em;
    margin-right: 4px;
    &:hover {
        background-color: orange;
    }
`

class Modal extends React.Component {
    render(props) {
        return (
            <React.Fragment>
            { this.props.show ? 
            <Wrapper>
                <ModalMain>
                    <ModalHeader>
                        <CloseButton onClick={this.props.function}>&times;</CloseButton>
                        <h2>This is the header</h2>
                    </ModalHeader>
                    <ModalBody>
                        <p>This is the body</p>
                        <p>Just the body of the modal</p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton>Yes</ModalButton>
                        <ModalButton>No</ModalButton>
                    </ModalFooter>
                </ModalMain>
            </Wrapper>
            : null
            }
            </React.Fragment>
        )
    }
}

export default Modal