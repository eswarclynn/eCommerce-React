import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state={
        products : [],
        detailProduct : detailProduct,
        cart:[],
        modelOpen:false,
        modelProduct:detailProduct
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
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf( this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            ()=>{
            return {products : tempProducts, cart:[...this.state.cart, product] }
            },
            () => {
                console.log(this.state);
            }
        )
    };

    openModel = id =>{
        const product = this.getItem(id);
        this.setState(
            ()=>{return {modelProduct:product, modelOpen:true}}
        )
    }

    closeModel = ()=>{
        this.setState(
            ()=>{return {modelOpen:false}}
        )
    }
    render() {
        return (
            <ProductContext.Provider value={{ 
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModel: this.openModel,
                closeModel: this.closeModel
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};