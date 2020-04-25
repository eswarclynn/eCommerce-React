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
    
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id)=>{
        const product = this.getItem(id);
        this.setState( {detailProduct:product} )
    };
    
    addToCart = (id)=>{
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