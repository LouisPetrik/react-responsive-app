import React from "react"
import styled from "styled-components"


const CustomButton = styled.button`
    color: orange;
    padding: 0.5em 2em;
    border-radius: 0.5em;
    font-size: 14px;
    &:hover {
        background-color: lightblue;
    }
`


class Button extends React.Component {
    render() {
        return (
            <CustomButton>
                Hallo
            </CustomButton>
        )
    }
}

export default Button