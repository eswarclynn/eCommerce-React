import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id, title, img, info, price, company, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-title text-blue ">
                                    <h2>{title}</h2>
                                </div>
                                
                                <div className="row">
                                    <div className="col-10 col-lg-6 mx-auto text-capitalize">
                                        <img src={img} className="img-fluid mx-auto d-block" alt="product"/>
                                    </div>

                                    <div className="col-10 mx-auto col-lg-6 my-5 text-capitalize">
                                        <h2>model : {title}</h2>
                                        <h3 className="mb-2 text-muted">Made By : {company}</h3>
                                        <h3 className="mt-3 text-blue">Price : ${price}</h3>
                                        <p className="text-capitalize font-weight-bold"><h4>Description:</h4></p>
                                        <p>{info}</p>

                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    Back to Products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer>
                                                {inCart? 'In Cart' : 'Add to Cart'}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
