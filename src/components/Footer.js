import React from "react"
import styled from "styled-components"

const CustomFooter = styled.footer`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    background-color: #efefef;
    text-align: center;
`
const FooterLink = styled.a`
    display: block;
    text-align: center;
    font-size: 1.2em;
`
const Footer = () => {
    return (
        <CustomFooter>
            <FooterLink href="https://github.com/LouisPetrik/react-responsive-app">
                GitHub 
            </FooterLink>
        </CustomFooter>
    )
}

export default Footer