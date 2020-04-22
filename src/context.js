import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state={
        products : storeProducts,
        detailProduct : detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{
        let tempproducts = [];
        storeProducts.forEach( item =>{
            const singleItem = {...item};
            tempproducts = [...tempproducts, singleItem];
            
        })
        this.setState({products: tempproducts});
    }
    
    handleDetail = ()=>{
        console.log('hello from details')
    };
    
    addToCart = ()=>{
        console.log('hello from add to cart')
    };
    render() {
        return (
            <ProductContext.Provider value={{ 
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};