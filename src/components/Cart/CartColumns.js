import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block mr-0">
                <div className="row mt-3">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-bold">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 pl-5">
                        <p className="text-uppercase text-bold">Name </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-bold">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-bold">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-bold">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase text-bold">Total</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
