import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns.js'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
import styled from 'styled-components';
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <section className="mt-3">
                <ProductConsumer>
                    {(value)=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />
                                        
                                        {/*For Large Screens*/}
                                        <div className="row p-3" >
                                            <LgDivision className="col-lg-8 bg-light ml-5 d-none d-lg-block pb-2 scroll">
                                                <CartColumns />
                                                <CartList value = {value} />
                                            </LgDivision>

                                            <LgDivision className="col-lg-3 d-none d-lg-block ml-4">
                                                <CartTotals value={value} />
                                            </LgDivision>
                                        </div>

                                        {/*For Small Screens*/}
                                        <div className="row d-sm-block d-lg-none justify-content-center">
                                            
                                            <div className="col-10 mx-auto ">
                                                <CartTotals value={value} />
                                            </div>

                                            <div className="col-10 mx-auto">
                                                <CartColumns />
                                                <CartList value = {value} />
                                            </div>
                                        </div>
                                </React.Fragment>
                            )
                        }
                        else{
                            return(
                                <EmptyCart />
                            )
                        }
                    }}

                </ProductConsumer>

            </section>
        )
    }
}


const LgDivision = styled.div`
    box-shadow: 3px 3px 5px 3px rgba(150,150,150,0.67);
    background-color: #ffffff;
    height: 67vh;
    overflow: auto;
`

