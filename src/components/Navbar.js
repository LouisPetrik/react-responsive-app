import React from "react"
import styled from "styled-components"
import Media from "react-media"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
`

const CustomNavbar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

const CustomLink = styled.a`
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.2em;
`

const DropdownIcon = styled.div`
    float: right;
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.2em;
    margin-right: 7%;
    border-color: white;
    border-radius: 2px;
`

const DropdownMenu = styled.div`
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

const DropdownLink = styled.a`
    width: 100%;
    display: block;
    background: #383838;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.2em;
    border: 1px solid white;
`

class Navbar extends React.Component {

    state = {
        showDropdownMenu: false
    }

    showDropdownMenu = () => {
        this.setState(prevState => {
            return {
                showDropdownMenu: !prevState.showDropdownMenu
            }
        })
    }
    render() {
        return (
            <Wrapper>

                <Media query="(max-width: 599px)">
                    {matches =>
                        matches ? (
                        <React.Fragment>
                        <CustomNavbar>
                            <DropdownIcon>
                                <FontAwesomeIcon icon={faBars} size="1x" onClick={this.showDropdownMenu} />
                            </DropdownIcon>
                        </CustomNavbar>
                        { this.state.showDropdownMenu ? 
                            <DropdownMenu>
                              <DropdownLink>hallo</DropdownLink>
                              <DropdownLink>hallo</DropdownLink>
                            </DropdownMenu>
                            :null
                        }
                        </React.Fragment>
                        
                        
                        ) : (
                        <CustomNavbar>
                            <CustomLink href="/">Home</CustomLink>
                            <CustomLink href="/about">About</CustomLink>
                            <CustomLink href="/contact">Contact</CustomLink>
                        </CustomNavbar>
                        )
                    }
                </Media>
            </Wrapper>
        )
    }
}

export default Navbar