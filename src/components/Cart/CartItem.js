import React, { Component } from 'react'
import styled from 'styled-components';

export default class CartItem extends Component {
    render() {
        const item = this.props.item;
        const { increment, decrement, removeItem } = this.props.value;

        
        return (
            <Division className="row mt-3 text-center ">
                <div className="col-10 mx-auto col-lg-2">
                    <img className="" src={item.img} height="130px"/>
                </div>
                <div className="col-10 mx-auto col-lg-2 pl-5 my-2">
                    <span className="d-lg-none text-bold">Name: </span>
                    <span className="text-capitalize"> {item.title}</span>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2">
                    <span className="d-lg-none text-bold">Price: </span>
                    <span className="text-capitalize"> ${item.price}</span>
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2">
                    <div className="d-flex justify-content-center">
                        <span 
                            className="btn btn-black mx-1" 
                            onClick={ ()=>decrement(item.id)

                            }
                        >-</span>
                        <span className="btn btn-black mx-1">{item.count}</span>
                        <span 
                            className="btn btn-black mx-1" 
                            onClick={ ()=>increment(item.id)

                            }
                        >+</span>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2">
                    <div className="cart-icon">
                        <i className="fa fa-trash" onClick={()=>removeItem(item.id)}></i>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2">
                    <strong className="d-lg-none">Item Total: </strong>
                    <span className="text-capitalize"> ${item.total}</span>
                </div>

            </Division>

        )
    }
}

const Division = styled.div`

    transition: all 0.6s linear;
    &:hover{
        background: var(--mainwhite);
        box-shadow: 0px 0px 9px 1px rgba(150,150,150,0.67);
    }
`