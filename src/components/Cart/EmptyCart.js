import React, { Component } from 'react'
import {ButtonContainer} from '../Button'
import { Link } from 'react-router-dom'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Oops! Your cart is empty.</h1>
                        <div className="mt-4">
                        <Link to="/">
                            <ButtonContainer>Shop Now!</ButtonContainer>
                        </Link>

                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}
