import React, { Component } from 'react'

export default class Product extends Component {

    render() {
        const { product,addToCart } = this.props;
        return (
            <div className="card">
                <img height={300} width={300} className="card-img-top" src={product.hinhAnh} alt='' />
                <div className="card-body text-center">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.moTa}</p>
                    <p className="card-text">gia: {product.price}$</p>
                    <button className="btn btn-primary" onClick={()=>addToCart(product)}>ADD To Cart</button>
                </div>
            </div>
        )
    }
}
