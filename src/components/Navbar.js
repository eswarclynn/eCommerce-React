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
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-items-center" id="collapsibleNavbar">
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
`
