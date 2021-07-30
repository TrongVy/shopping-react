import React, { Component } from 'react'
import Product from './Product';

export default class ListProduct extends Component {

    render() {
        const {listProduct,addToCart} = this.props;
        return (
  
            <div className="row">
                 {listProduct.map( (product, index) => {
                     return(
                         <div key={index} className="col-3">
                             <Product    product ={product} addToCart={addToCart}/>
                         </div>
                     )
                 })}
            </div>
        )
    }
}
