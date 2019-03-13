import React from "react"
import styled from "styled-components"




const CustomModal = styled.div`
    background-color: lightgrey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    padding-top: 10%;
    padding-bottom: 10%;
    font-family: sans-serif;
`

const ModalHeader = styled.div`
    background-color: grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
    font-family: "Roboto";
`


const Modal = (props) => {
    return (
        <React.Fragment>
            <ModalHeader>{props.title}</ModalHeader>
            <CustomModal>{props.children}</CustomModal>
        </React.Fragment>
    )
}

export default Modal