import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CartTotals extends Component {
    render() {
        const{cartSubTotal, cartTax, cartTotal, clearCart} = this.props.value; 

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center p-4">
                        <div className="col-10 text-center">
                            <Link to='/'>
                                <button className="btn btn-outline-danger mb-3 px-4 " type="button" onClick={()=>clearCart()}>Clear Cart</button>
                            </Link>
                            <h4 className="row">
                                <span className="text-blue col">Subtotal: </span>
                                <strong className="col">${cartSubTotal}</strong>
                            </h4>
                            <h4 className="row">
                                <span className="text-blue col">Tax: </span>
                                <strong className="col">${cartTax}</strong>
                            </h4>
                            <h4 className="row">
                                <span className="text-blue col">Total: </span>
                                <strong className="col">${cartTotal}</strong>
                            </h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
