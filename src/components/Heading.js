import React from "react"
import styled from "styled-components"

const CustomHeading = styled.h1`
    font-family: Roboto;
    margin-bottom: 100px;
    margin-top: 100px;
    font-size: 36px;
    font-weight: 500;
`
const Underline = styled.div`
    border-bottom: 1px solid #eee;
    padding-top: 9px;
`



const Heading = (props) => {
    return (
        <CustomHeading>
            {props.title}
            <Underline/>
        </CustomHeading>
    )
}

export default Heading;