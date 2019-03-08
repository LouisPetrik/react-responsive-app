import Helmet from "react-helmet"
import React from "react"

class Header extends React.Component {
    render() {
        return (
            <Helmet>
                <title>Example Title</title>
            </Helmet>
        )
    }
}

export default Header