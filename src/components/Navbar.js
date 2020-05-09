import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../flynn.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" height="35px" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-items-center" id="collapsibleNavbar">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-2">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fa fa-cart-plus"></i>
                            </span>
                            My Cart
                        </ButtonContainer>
                    </Link>
                </div>  
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
    }
    box-shadow: 0 2px 6px 3px rgba(150,150,150,0.8);
`
