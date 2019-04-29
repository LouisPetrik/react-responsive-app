import React from "react"
import styled from "styled-components"

const CustomCookiePopup = styled.div`
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    color: white;
    font-family: Roboto;
    font-size: 20px;
`

const Button = styled.button`
   color: orange;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    font-size: 15px;
    background-color: white;
    &:hover {
        background-color: lightgrey;
    }
`
const CookiePopup = (props) => {
    return (
        <React.Fragment>
            { props.show ? 
                <CustomCookiePopup>
                    lorem ipsum something with cookies.
                    <Button onClick={props.function}>who cares</Button>
                </CustomCookiePopup>
                : null
            }
            </React.Fragment>
         
    )
}

export default CookiePopup