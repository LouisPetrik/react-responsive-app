import React from "react"
import styled from "styled-components"

const CustomCookiePopup = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    background-color: #efefef;
    text-align: center;
`
const CookiePopup = () => {
    return (
        <React.Fragment>
            <CustomCookiePopup>
                this is some content
            </CustomCookiePopup>
        </React.Fragment>
    )
}

export default CookiePopup